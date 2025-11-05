// models/recipeModel.js

class Recipe {
    constructor(id, title, ingredients, instructions, category, image, createdAt, updatedAt, user, slug) {
        this.id = id;
        this.title = title;
        this.ingredients = ingredients;
        this.instructions = instructions;
        this.category = category;
        this.image = image;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.user = user;
        this.slug = slug;
    }
}

module.exports = { Recipe };