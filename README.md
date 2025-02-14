# Recipes

Recipes App
Task Description
Develop a complete CRUD (Create, Read, Update, Delete) application for managing recipes using Node.js, Express.js, and Mongoose. The application should follow the MVC pattern and include comprehensive API documentation using Postman.

Functionalities
The following functionalities are achieved in this application:

createRecipe: Create a new recipe.

getAllRecipes: Retrieve all recipes.

getRecipeById: Retrieve a single recipe by ID.

updateRecipe: Update a recipe by ID.

deleteRecipe: Delete a recipe by ID.

Task Requirements
Follow the MVC pattern with separate folders for models, views, and controllers.

Complete implementation of the CRUD operations.

Fully functional integration with MongoDB using Mongoose.

Detailed documentation for each API endpoint in Postman.

Include sample requests and responses for each operation.

Use proper error handling and validation.

Clean, readable, and well-documented code.

Project Structure
recipes-app/
│
├── controllers/
│   └── recipeController.js
│
├── models/
│   └── recipe.js
│
├── routes/
│   └── recipeRoutes.js
│
├── app.js
└── package.json
Setup Instructions
Clone the repository:

sh
git clone <repository-url>
cd recipes-app
Install dependencies:

sh
npm install
Start MongoDB server: Make sure MongoDB is installed and running on your local machine. You can start it using:

sh
mongod
Start the application:

sh
nodemon app.js
API Documentation
1. Create Recipe
Request Type: POST

URL: http://localhost:3000/api/recipes

Headers:

Content-Type: application/json

Body:

Response:

json
[
    {
        "_id": "1",
        "title": "Pasta Primavera",
        "ingredients": ["abc1", "def2"],
        "instructions": "XYZ.",
        "createdAt": "2023-10-14T14:48:00.000Z"
    },
    {
        "_id": "2",
        "title": "Chicken Tikka Masala",
        "ingredients": ["abc1", "def2"],
        "instructions": "XYZ.",
        "createdAt": "2023-10-14T14:48:00.000Z"
    },
    {
        "_id": "3",
        "title": "Vegetable Stir-Fry",
        "ingredients": ["abc1", "def2"],
        "instructions": "XYZ.",
        "createdAt": "2023-10-14T14:48:00.000Z"
    },
    {
        "_id": "4",
        "title": "Beef Bourguignon",
        "ingredients": ["abc1", "def2"],
        "instructions": "XYZ.",
        "createdAt": "2023-10-14T14:48:00.000Z"
    },
    {
        "_id": "5",
        "title": "Margherita Pizza",
        "ingredients": ["abc1", "def2"],
        "instructions": "XYZ.",
        "createdAt": "2023-10-14T14:48:00.000Z"
    },
    {
        "_id": "6",
        "title": "Sushi Rolls",
        "ingredients": ["abc1", "def2"],
        "instructions": "XYZ.",
        "createdAt": "2023-10-14T14:48:00.000Z"
    },
    {
        "_id": "7",
        "title": "Caesar Salad",
        "ingredients": ["abc1", "def2"],
        "instructions": "XYZ.",
        "createdAt": "2023-10-14T14:48:00.000Z"
    },
    {
        "_id": "8",
        "title": "Beef Tacos",
        "ingredients": ["abc1", "def2"],
        "instructions": "XYZ.",
        "createdAt": "2023-10-14T14:48:00.000Z"
    },
    {
        "_id": "9",
        "title": "Vegetable Biryani",
        "ingredients": ["abc1", "def2"],
        "instructions": "XYZ.",
        "createdAt": "2023-10-14T14:48:00.000Z"
    },
    {
        "_id": "10",
        "title": "Shrimp Scampi",
        "ingredients": ["abc1", "def2"],
        "instructions": "XYZ.",
        "createdAt": "2023-10-14T14:48:00.000Z"
    },
    {
        "_id": "11",
        "title": "Chicken Alfredo",
        "ingredients": ["abc1", "def2"],
        "instructions": "XYZ.",
        "createdAt": "2023-10-14T14:48:00.000Z"
    },
    {
        "_id": "12",
        "title": "Mushroom Risotto",
        "ingredients": ["abc1", "def2"],
        "instructions": "XYZ.",
        "createdAt": "2023-10-14T14:48:00.000Z"
    },
    {
        "_id": "13",
        "title": "Fish and Chips",
        "ingredients": ["abc1", "def2"],
        "instructions": "XYZ.",
        "createdAt": "2023-10-14T14:48:00.000Z"
    },
    {
        "_id": "14",
        "title": "Lamb Kebabs",
        "ingredients": ["abc1", "def2"],
        "instructions": "XYZ.",
        "createdAt": "2023-10-14T14:48:00.000Z"
    },
    {
        "_id": "15",
        "title": "Paneer Butter Masala",
        "ingredients": ["abc1", "def2"],
        "instructions": "XYZ.",
        "createdAt": "2023-10-14T14:48:00.000Z"
    },
    {
        "_id": "16",
        "title": "Pho Noodle Soup",
        "ingredients": ["abc1", "def2"],
        "instructions": "XYZ.",
        "createdAt": "2023-10-14T14:48:00.000Z"
    },
    {
        "_id": "17",
        "title": "Chicken Parmesan",
        "ingredients": ["abc1", "def2"],
        "instructions": "XYZ.",
        "createdAt": "2023-10-14T14:48:00.000Z"
    },
    {
        "_id": "18",
        "title": "Vegetable Lasagna",
        "ingredients": ["abc1", "def2"],
        "instructions": "XYZ.",
        "createdAt": "2023-10-14T14:48:00.000Z"
    },
    {
        "_id": "19",
        "title": "Beef Stroganoff",
        "ingredients": ["abc1", "def2"],
        "instructions": "XYZ.",
        "createdAt": "2023-10-14T14:48:00.000Z"
    },
    {
        "_id": "20",
        "title": "Falafel Wrap",
        "ingredients": ["abc1", "def2"],
        "instructions": "XYZ.",
        "createdAt": "2023-10-14T14:48:00.000Z"
    }
]

2. Get All Recipes
Request Type: GET

URL: http://localhost:3000/api/recipes

Response:

json
[
    {
        "_id": "1",
        "title": "Pasta Primavera",
        "ingredients": ["abc1", "def2"],
        "instructions": "XYZ.",
        "createdAt": "2023-10-14T14:48:00.000Z"
    },
    {
        "_id": "2",
        "title": "Chicken Tikka Masala",
        "ingredients": ["abc1", "def2"],
        "instructions": "XYZ.",
        "createdAt": "2023-10-14T14:48:00.000Z"
    },
    {
        "_id": "3",
        "title": "Vegetable Stir-Fry",
        "ingredients": ["abc1", "def2"],
        "instructions": "XYZ.",
        "createdAt": "2023-10-14T14:48:00.000Z"
    },
    {
        "_id": "4",
        "title": "Beef Bourguignon",
        "ingredients": ["abc1", "def2"],
        "instructions": "XYZ.",
        "createdAt": "2023-10-14T14:48:00.000Z"
    },
    {
        "_id": "5",
        "title": "Margherita Pizza",
        "ingredients": ["abc1", "def2"],
        "instructions": "XYZ.",
        "createdAt": "2023-10-14T14:48:00.000Z"
    },
    {
        "_id": "6",
        "title": "Sushi Rolls",
        "ingredients": ["abc1", "def2"],
        "instructions": "XYZ.",
        "createdAt": "2023-10-14T14:48:00.000Z"
    },
    {
        "_id": "7",
        "title": "Caesar Salad",
        "ingredients": ["abc1", "def2"],
        "instructions": "XYZ.",
        "createdAt": "2023-10-14T14:48:00.000Z"
    },
    {
        "_id": "8",
        "title": "Beef Tacos",
        "ingredients": ["abc1", "def2"],
        "instructions": "XYZ.",
        "createdAt": "2023-10-14T14:48:00.000Z"
    },
    {
        "_id": "9",
        "title": "Vegetable Biryani",
        "ingredients": ["abc1", "def2"],
        "instructions": "XYZ.",
        "createdAt": "2023-10-14T14:48:00.000Z"
    },
    {
        "_id": "10",
        "title": "Shrimp Scampi",
        "ingredients": ["abc1", "def2"],
        "instructions": "XYZ.",
        "createdAt": "2023-10-14T14:48:00.000Z"
    },
    {
        "_id": "11",
        "title": "Chicken Alfredo",
        "ingredients": ["abc1", "def2"],
        "instructions": "XYZ.",
        "createdAt": "2023-10-14T14:48:00.000Z"
    },
    {
        "_id": "12",
        "title": "Mushroom Risotto",
        "ingredients": ["abc1", "def2"],
        "instructions": "XYZ.",
        "createdAt": "2023-10-14T14:48:00.000Z"
    },
    {
        "_id": "13",
        "title": "Fish and Chips",
        "ingredients": ["abc1", "def2"],
        "instructions": "XYZ.",
        "createdAt": "2023-10-14T14:48:00.000Z"
    },
    {
        "_id": "14",
        "title": "Lamb Kebabs",
        "ingredients": ["abc1", "def2"],
        "instructions": "XYZ.",
        "createdAt": "2023-10-14T14:48:00.000Z"
    },
    {
        "_id": "15",
        "title": "Paneer Butter Masala",
        "ingredients": ["abc1", "def2"],
        "instructions": "XYZ.",
        "createdAt": "2023-10-14T14:48:00.000Z"
    },
    {
        "_id": "16",
        "title": "Pho Noodle Soup",
        "ingredients": ["abc1", "def2"],
        "instructions": "XYZ.",
        "createdAt": "2023-10-14T14:48:00.000Z"
    },
    {
        "_id": "17",
        "title": "Chicken Parmesan",
        "ingredients": ["abc1", "def2"],
        "instructions": "XYZ.",
        "createdAt": "2023-10-14T14:48:00.000Z"
    },
    {
        "_id": "18",
        "title": "Vegetable Lasagna",
        "ingredients": ["abc1", "def2"],
        "instructions": "XYZ.",
        "createdAt": "2023-10-14T14:48:00.000Z"
    },
    {
        "_id": "19",
        "title": "Beef Stroganoff",
        "ingredients": ["abc1", "def2"],
        "instructions": "XYZ.",
        "createdAt": "2023-10-14T14:48:00.000Z"
    },
    {
        "_id": "20",
        "title": "Falafel Wrap",
        "ingredients": ["abc1", "def2"],
        "instructions": "XYZ.",
        "createdAt": "2023-10-14T14:48:00.000Z"
    }
]

3. Get Recipe by ID
Request Type: GET

URL: http://localhost:3000/api/recipes/16

Response:

json
 {
        "_id": "16",
        "title": "Pho Noodle Soup",
        "ingredients": ["abc1", "def2"],
        "instructions": "XYZ.",
        "createdAt": "2023-10-14T14:48:00.000Z"
    }
4. Update Recipe
Request Type: PUT

URL: http://localhost:3000/api/recipes/17

Headers:

Content-Type: application/json

Body:

json
 {
        "_id": "17",
        "title": "Chicken Parmesan",
        "ingredients": ["abc1", "def2"],
        "instructions": "added XYZ.",
        "createdAt": "2023-10-14T14:48:00.000Z"
    }
Response:

json
 {
        "_id": "17",
        "title": "Chicken Parmesan",
        "ingredients": ["abc1", "def2"],
        "instructions": "added XYZ.",
        "createdAt": "2023-10-14T14:48:00.000Z"
    }
5. Delete Recipe
Request Type: DELETE

URL: http://localhost:3000/api/recipes/20

Response:

json
{
    "message": "Recipe deleted"
}
Error Handling
The application includes proper error handling and validation to ensure robust functionality. Errors are returned with appropriate status codes and messages.