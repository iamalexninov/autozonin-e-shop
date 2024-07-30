const Product = require("../models/Product");

async function getProducts() {
  const products = await Product.find({});
  return products;
}

async function getProduct(id) {
  const product = await Product.findById(id);
  return product;
}

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

  return product;
}

module.exports = {
  getProducts,
  getProduct,
  addProduct,
};
