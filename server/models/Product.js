const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  ingredients: { type: String, required: true },
  usage: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, default: 'oil1.jpg' },
  category: { type: String, default: 'Growth' },
  description: { type: String, default: '' },
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);
