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

async function changeProduct(id, data) {
  const product = await Product.findById(id);
  if (!product) throw new Error({ msg: "Product doesn't exist." });

  product.name = data.name;
  product.brand = data.brand;
  product.model = data.model;
  product.category = data.category;
  product.price = data.price;
  product.stock = data.stock;
  product.description = data.description;
  product.compatibility = data.compatibility;

  await product.save();
  return product;
}

async function removeProduct(id) {
  await Product.findByIdAndDelete(id);
}

module.exports = {
  getProducts,
  getProduct,
  addProduct,
  changeProduct,
  removeProduct,
};
