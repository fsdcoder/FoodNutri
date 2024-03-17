// foodItem.model.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const foodItemSchema = new Schema({
  name: { type: String, required: true },
  foodGroup: { type: String, required: true },
  description: { type: String, required: true },
  nutritionalInformation: {
    calories: { type: Number, required: true },
    macronutrients: {
      carbohydrates: { type: Number, required: true },
      proteins: { type: Number, required: true },
      fats: { type: Number, required: true },
    },
    micronutrients: {
      vitamins: { type: String, required: true },
      minerals: { type: String, required: true },
    },
    fiber: { type: Number, required: true },
    sodium: { type: Number, required: true },
    cholesterol: { type: Number, required: true },
  },
  servingSize: { type: String, required: true },
  allergens: { type: [String], required: true },
  ingredients: { type: [String], required: true },
  preparationMethods: { type: [String], required: true },
  certifications: { type: [String], required: true },
  countryOfOrigin: { type: String, required: true },
  brandOrManufacturer: { type: String, required: true },
  dietaryRestrictions: { type: [String], required: true },
  healthBenefits: { type: [String], required: true },
  bestPractice: { type: String, required: true },
});

module.exports = mongoose.model('FoodItem', foodItemSchema);