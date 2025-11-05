// utils/userStorage.js

const fs = require('fs');
const path = require('path');

const RECIPES_FILE = path.join(__dirname, '../data/recipes.json');

// charger les recettes
function loadRecipes() {
    if (!fs.existsSync(RECIPES_FILE)) {
        fs.writeFileSync(RECIPES_FILE, JSON.stringify([]));
    }
    const data = fs.readFileSync(RECIPES_FILE);
    return JSON.parse(data);
}

// sauvegarder les recettes
function saveRecipes(recipes) {
    fs.writeFileSync(RECIPES_FILE, JSON.stringify(recipes, null, 2));
}

module.exports = { loadRecipes, saveRecipes };