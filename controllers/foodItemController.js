// foodItem.controller.js
const FoodItem = require('../models/foodItem.model');

exports.createFoodItem = async (req, res) => {
  try {
    const newFoodItem = new FoodItem(req.body);
    await newFoodItem.save();
    res.status(201).json(newFoodItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getAllFoodItems = async (req, res) => {
  try {
    const foodItems = await FoodItem.find();
    res.status(200).json(foodItems);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getFoodItemById = async (req, res) => {
  try {
    const foodItem = await FoodItem.findById(req.params.id);
    if (!foodItem) {
      return res.status(404).json({ message: 'Food item not found' });
    }
    res.status(200).json(foodItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateFoodItem = async (req, res) => {
  try {
    const foodItem = await FoodItem.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!foodItem) {
      return res.status(404).json({ message: 'Food item not found' });
    }
    res.status(200).json(foodItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteFoodItem = async (req, res) => {
  try {
    const foodItem = await FoodItem.findByIdAndDelete(req.params.id);
    if (!foodItem) {
      return res.status(404).json({ message: 'Food item not found' });
    }
    res.status(200).json({ message: 'Food itemdeleted' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};