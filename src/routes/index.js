const {Router} = require("express");
const { getRecipes } = require("../controllers/recipeController");

const router = Router();

// ttes les recettes
router.get("/", getRecipes);

module.exports = router;