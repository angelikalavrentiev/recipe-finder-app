const {Router} = require("express");
const { getRecipes, getRecipe, createRecipe, updateRecipe, deleteRecipe} = require("../controllers/recipeController");
const { isAuthenticated, isAdmin } = require("../middlewares/authMiddleware");


const router = Router();

// ttes les recettes
router.get("/", getRecipes);

// une recette
router.get("/:id", getRecipe);

// créer recette
router.post("/", createRecipe);

// modifier recette
router.put("/:id", updateRecipe);

// supprimer recette
router.delete("/:id", deleteRecipe);

module.exports = router;