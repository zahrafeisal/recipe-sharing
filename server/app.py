from flask import request, jsonify
from flask_restful import Resource
from config import app, db, api
from models import User, Recipe, Tag

# Home Route
@app.route('/')
def index():
    return '<h1>Recipe Sharing App</h1>'

#User Resource
class UserResource(Resource):
    def get(self):
        users = User.query.all()
        return jsonify([user.to_dict() for user in users])

    def post(self):
        data = request.json
        new_user = User(username=data['username'])
        db.session.add(new_user)
        db.session.commit()
        return new_user.to_dict(), 201

api.add_resource(UserResource, '/users')

#ecipe Resource
class RecipeResource(Resource):
    def get(self):
        recipes = Recipe.query.all()
        return jsonify([recipe.to_dict() for recipe in recipes])

    def post(self):
        data = request.json
        new_recipe = Recipe(
            title=data['title'],
            ingredients=data['ingredients'],
            instructions=data['instructions'],
            user_id=data['user_id']
        )
        db.session.add(new_recipe)
        db.session.commit()
        return new_recipe.to_dict(), 201

api.add_resource(RecipeResource, '/recipes')

#Tag Resource
class TagResource(Resource):
    def get(self):
        tags = Tag.query.all()
        return jsonify([tag.to_dict() for tag in tags])

    def post(self):
        data = request.json
        new_tag = Tag(name=data['name'])
        db.session.add(new_tag)
        db.session.commit()
        return new_tag.to_dict(), 201

api.add_resource(TagResource, '/tags')

if __name__ == '__main__':
    app.run(port=5555, debug=True)