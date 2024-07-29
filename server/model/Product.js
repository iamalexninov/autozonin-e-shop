const { Schema, model } = require("mongoose");

const productSchema = new Schema({
  name: { type: String, required: true, trim: true },
  brand: { type: String, required: true, trim: true },
  model: { type: String, required: true, trim: true },
  year: { type: Number, required: true },
  category: { type: String, required: true, trim: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true, min: 0 },
  description: { type: String, required: true },
  compatibility: [{ type: String, trim: true }],
  
});

const Product = model("Product", productSchema);

module.exports = Product;
