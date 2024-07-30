const Product = require("../models/Product");

async function addProduct(data) {
  const product = new Product({
    name: data.name,
    brand: data.brand,
    model: data.model,
    category: data.category,
    price: data.price,
    stock: data.stock,
    description: data.description,
    compatibility: data.compatibility,
  });

  await product.save();
}

module.exports = {
  addProduct,
};
