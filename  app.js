// app.js
const express = require('express');
const mongoose = require('mongoose');
const foodItemRoutes = require('./routes/foodItem.routes');

const app = express();

mongoose.connect('mongodb://localhost:27017/food-nutrition-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());
app.use('/api/food-items', foodItemRoutes);

app.listen(3000, () => {
  console.log('Server started on port 3000');
});