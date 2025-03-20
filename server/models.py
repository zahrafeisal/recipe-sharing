from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy
from werkzeug.security import generate_password_hash, check_password_hash  
from sqlalchemy.ext.hybrid import hybrid_property  

from config import db

# Models go here!

# Many-to-Many Relationship (Recipe <-> Tag)
recipe_tag = db.Table(
    'recipe_tag',
    db.Column('recipe_id', db.Integer, db.ForeignKey('recipes.id'), primary_key=True),
    db.Column('tag_id', db.Integer, db.ForeignKey('tags.id'), primary_key=True)
)

class User(db.Model): 
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)  
    username = db.Column(db.String(80), unique=True, nullable=False)  
    _password_hash = db.Column('password_hash', db.String(128), nullable=False)  

    @hybrid_property  
    def password(self):  
        raise AttributeError("password is not a readable attribute")  

    @password.setter  
    def password(self, plain_password):  
        self._password_hash = generate_password_hash(plain_password)  

    def check_password(self, plain_password):  
        return check_password_hash(self._password_hash, plain_password)  

    def to_dict(self):  
        return {  
            'id': self.id,  
            'username': self.username  
        }  


    # Relationships
    recipes = db.relationship('Recipe', backref='user', lazy=True)

    serialize_rules = ('-recipes.user',)

    
class Recipe(db.Model, SerializerMixin):
    __tablename__ = 'recipes'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    ingredients = db.Column(db.Text, nullable=False)
    instructions = db.Column(db.Text, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)

    # Many-to-Many with Tags
    tags = db.relationship('Tag', secondary=recipe_tag, backref='recipes')

    serialize_rules = ('-user.recipes', '-tags.recipes')

class Tag(db.Model, SerializerMixin):
    __tablename__ = 'tags'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), unique=True, nullable=False)

    serialize_rules = ('-recipes.tags',)