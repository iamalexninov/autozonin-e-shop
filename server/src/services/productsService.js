const ProductModel = require("../models/ProductModel");

async function fetchAllProducts() {
  return ProductModel.find({})
    .then((products) => {
      return products;
    })
    .catch((error) => {
      console.error("Error fetching products:", error);
      throw error;
    });
}

function fetchProductByCatalogNumber(id) {
  return ProductModel.findById({ _id: id })
    .then((product) => {
      return product;
    })
    .catch((error) => {
      console.error("Error fetching product:", error);
      throw error;
    });
}

function insertProduct(dataObject) {}

function updateProductByCatalogNumber(id, dataObject) {}

function markProductAsDeletedByCatalogNumber(id) {}

module.exports = {
  fetchAllProducts,
  fetchProductByCatalogNumber,
  insertProduct,
  updateProductByCatalogNumber,
  markProductAsDeletedByCatalogNumber,
};
