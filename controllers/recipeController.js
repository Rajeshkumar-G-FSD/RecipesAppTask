const Recipe = require('../models/recipe');

// Create one or multiple new recipes with custom IDs
exports.createRecipe = async (req, res) => {
    try {
        const recipes = req.body.map(recipe => ({
            _id: recipe._id,
            title: recipe.title,
            ingredients: recipe.ingredients,
            instructions: recipe.instructions
        }));
        const newRecipes = await Recipe.insertMany(recipes);
        console.log(newRecipes);
        res.status(201).json(newRecipes);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all recipes
exports.getAllRecipes = async (req, res) => {
    try {
        const recipes = await Recipe.find();
        console.log(recipes);
        res.status(200).json(recipes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a recipe by ID
exports.getRecipeById = async (req, res) => {
    try {
        const recipe = await Recipe.findById(req.params.id);
        if (!recipe) {
            return res.status(404).json({ message: 'Recipe not found' });
        }
        res.status(200).json(recipe);
        console.log(recipe);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a recipe by ID
exports.updateRecipe = async (req, res) => {
    try {
        const updatedRecipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedRecipe) {
            return res.status(404).json({ message: 'Recipe not found' });
        }
        res.status(200).json(updatedRecipe);
        console.log(updatedRecipe);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a recipe by ID
exports.deleteRecipe = async (req, res) => {
    try {
        const deletedRecipe = await Recipe.findByIdAndDelete(req.params.id);
        if (!deletedRecipe) {
            return res.status(404).json({ message: 'Recipe not found' });
        }
        res.status(200).json({ message: 'Recipe deleted' });
        console.log(deletedRecipe);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
