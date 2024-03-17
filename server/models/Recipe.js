const { Schema, model } = require('mongoose');
const dataFormat = require('../utils/dateFormat');

const recipeSchema = new Schema({
    recipeTitle: {
        type: String,
        required: true,
    },
    recipeAuthor: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dataFormat(timestamp),
    },
    description: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 1000,
    },
    ingredient1: {
        type: String,
        required: true,
        maxlength: 30,
    },
    ingredient2: {
        type: String,
        required: false,
        maxlength: 30,
    },
    ingredient3: {
        type: String,
        required: false,
        maxlength: 30,
    },
    ingredient4: {
        type: String,
        required: false,
        maxlength: 30,
    },
    ingredient5: {
        type: String,
        required: false,
        maxlength: 30,
    },
    ingredient6: {
        type: String,
        required: false,
        maxlength: 30,
    },
    ingredient7: {
        type: String,
        required: false,
        maxlength: 30,
    },
    ingredient8: {
        type: String,
        required: false,
        maxlength: 30,
    },
    ingredient9: {
        type: String,
        required: false,
        maxlength: 30,
    },
    ingredient10: {
        type: String,
        required: false,
        maxlength: 30,
    },
    instructions: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 1000,
    },
});

const Recipe = model('Recipe', recipeSchema);

module.exports = Recipe;