// controllers/recipeController.js

// tt Recettes
exports.getRecipes = async (req, res) => {

    res.status(200).json({ message: "Tous les Recettes sont chargés" });
}

// Recette avec id
exports.getRecipe = async (req, res) => {

    res.status(200).json({ message: "Recette chargé" });
}

// créer Recette
exports.createRecipe = async (req, res) => {

    res.status(200).json({ message: "Recette crée" });
}

// modifier Recette
exports.updateRecipe = async (req, res) => {

    res.status(200).json({ message: "Recette changé" });
}

// supprimer Recette
exports.deleteRecipe = async (req, res) => {

    res.status(200).json({ message: "Recette supprimé" });
}