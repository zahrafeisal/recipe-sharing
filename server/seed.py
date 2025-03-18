#!/usr/bin/env python3

from random import choice
from faker import Faker
from app import app
from models import db, User, Recipe, Tag

fake = Faker()

if __name__ == '__main__':
    with app.app_context():
        print("Starting seed...")

        # Clear old data
        db.drop_all()
        db.create_all()

        # Create Users
        users = [User(username=fake.user_name()) for _ in range(3)]
        db.session.add_all(users)

        # Create Recipes
        recipes = [
            Recipe(
                title="Spaghetti Carbonara",
                ingredients="Pasta, Eggs, Bacon",
                instructions="Cook pasta, mix eggs and bacon",
                user=choice(users)
            ),
            Recipe(
                title="Chocolate Cake",
                ingredients="Flour, Sugar, Cocoa",
                instructions="Mix and bake",
                user=choice(users)
            )
        ]
        db.session.add_all(recipes)

        # Create Tags
        tags = [Tag(name=name) for name in ["Italian", "Dessert", "Vegan"]]
        db.session.add_all(tags)

        # Assign Tags to Recipes
        for recipe in recipes:
            recipe.tags.append(choice(tags))

        db.session.commit()
        print("✅ Database seeded successfully!")
