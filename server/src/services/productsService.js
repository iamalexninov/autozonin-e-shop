const ProductModel = require("../models/ProductModel");

async function fetchAllProducts() {
  return ProductModel.find({})
    .then((products) => products)
    .catch((error) => {
      console.error("Product Error:", error);
      throw error;
    });
}

function fetchProductByCatalogNumber(id) {
  return ProductModel.findById({ _id: id })
    .then((product) => product)
    .catch((error) => {
      console.error("Product Error:", error);
      throw error;
    });
}

function insertProduct(dataObject) {
  return manipulateProduct("create", dataObject)
    .then((product) => product)
    .catch((error) => {
      console.error("Product Error:", error);
      throw error;
    });
}

function updateProductByCatalogNumber(dataObject) {
  return manipulateProduct("update", dataObject)
    .then((product) => product)
    .catch((error) => {
      console.error("Product Error:", error);
      throw error;
    });
}

function markProductAsDeletedByCatalogNumber(dataObject) {
  return manipulateProduct("delete", dataObject)
    .then((product) => product)
    .catch((error) => {
      console.error("Product Error:", error);
      throw error;
    });
}

async function manipulateProduct(operation, data) {
  try {
    let product;

    switch (operation) {
      case "create":
        const newProduct = {
          _id: data._id,
          description: data.description,
          price: data.price,
          category: data.category,
          brand: data.brand,
          vehicleCompability: data.vehicleCompability,
          stockQuantity: data.stockQuantity,
          images: data.images,
          isDeleted: data.isDeleted || false,
          createdAt: new Date(),
          updatedAt: new Date(),
        };

        product = new ProductModel(newProduct);
        await product.save();
        break;

      case "update":
        const updateData = {
          description: data.description,
          price: data.price,
          category: data.category,
          brand: data.brand,
          vehicleCompatibility: data.vehicleCompatibility,
          stockQuantity: data.stockQuantity,
          images: data.images,
          isDeleted: data.isDeleted,
          updatedAt: new Date(),
        };

        product = await ProductModel.findByIdAndUpdate(data._id, updateData);
        await product.save();
        break;

      case "delete":
        const deleteData = {
          isDeleted: true,
          updatedAt: new Date(),
        };

        product = await ProductModel.findByIdAndUpdate(data._id, deleteData);
        await product.save();
        break;

      default:
        throw new Error(
          "Invalid operation: Use 'create', 'update' or 'delete'."
        );
    }

    return product;
  } catch (error) {
    throw new Error(`Error during ${operation} operation: ${error.message}`);
  }
}

module.exports = {
  fetchAllProducts,
  fetchProductByCatalogNumber,
  insertProduct,
  updateProductByCatalogNumber,
  markProductAsDeletedByCatalogNumber,
};
