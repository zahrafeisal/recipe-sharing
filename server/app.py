#!/usr/bin/env python3  

from flask import request, jsonify, session, make_response
from flask_restful import Resource, Api  
from config import app, db  
from models import User, Recipe, Tag  

# Home Route  
@app.route('/')  
def index():  
    return '<h1>Recipe Sharing App</h1>'  

# Logout Route  
@app.route('/logout', methods=['POST'])  
def logout():  
    session.pop('user_id', None)  
    return {'message': 'Logged out successfully!'}, 200


# User Resource  
class UserResource(Resource):  
    def get(self):  
        users = User.query.all()  
        return jsonify([user.to_dict() for user in users]), 200

    def post(self):  
        if 'register' in request.path:  
            # User Registration  
            data = request.json  
            if 'username' in data and 'password' in data:  
                if User.query.filter_by(username=data['username']).first():  
                    return {'message': 'Username already exists'}, 409  

                new_user = User(username=data['username'])  
                new_user.password = data['password']  # Set the password securely  
                db.session.add(new_user)  
                db.session.commit()  
                return new_user.to_dict(), 201  

            return {'message': 'Username and password required'}, 400  

        else:  # Handling login  
            data = request.json  
            user = User.query.filter_by(username=data['username']).first()  
            if user and user.check_password(data['password']):  
                session['user_id'] = user.id  # Store user ID in session  
                return {'message': 'Logged in successfully!'}, 200  
            return {'message': 'Invalid username or password'}, 401  

# Recipe Resource  
class RecipeResource(Resource):  
    def get(self):  
        recipes = Recipe.query.all()  
        return jsonify([recipe.to_dict() for recipe in recipes]), 200

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
        return make_response(new_recipe.to_dict(), 201) 

# Tag Resource  
class TagResource(Resource):  
    def get(self):  
        tags = Tag.query.all()  
        return jsonify([tag.to_dict() for tag in tags]), 200

    def post(self):  
        data = request.json  
        new_tag = Tag(name=data['name'])  
        db.session.add(new_tag)  
        db.session.commit()  
        return new_tag.to_dict(), 201  

api = Api(app)  
api.add_resource(UserResource, '/users', '/users/register') 
api.add_resource(RecipeResource, '/recipes')  
api.add_resource(TagResource, '/tags')  

if __name__ == '__main__':  
    app.run(port=5555, debug=True)  