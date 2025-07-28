const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
  title: String,
  location: String,
  price: Number,
  image: String,
  description: String,
  type: String,
  bedrooms: Number,
  bathrooms: Number,
  area: Number,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Property', propertySchema);
