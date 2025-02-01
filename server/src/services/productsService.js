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

    // TODO: refac

  return manipulateProduct("create", dataObject)
    .then((product) => product)
    .catch((error) => {
      console.error("Product Error:", error);
      throw error;
    });
}

async function updateProductByCatalogNumber(data) {
  //
  const product = ProductModel.findById({ _id: data._id });
  if (!product)
    throw new Error("Product doesn't exist. Please create it.");

  product._id = data._id
  product.description = data.description,
  product.price = data.price,
  product.category = data.category,
  product.brand = data.brand,
  product.vehicleCompability = data.vehicleCompability,
  product.stockQuantity = data.stockQuantity,
  product.images = data.images,
  product.isDeleted = data.isDeleted || false,
  product.updatedAt = data.updatedAt

  await product.save();
  return product;
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

      // TODO: Check
      case "update":
        const updateData = {
          _id: data._id,
          description: data.description,
          price: data.price,
          category: data.category,
          brand: data.brand,
          vehicleCompability: data.vehicleCompability,
          stockQuantity: data.stockQuantity,
          images: data.images,
          isDeleted: data.isDeleted || false,
          updatedAt: new Date(),
        };

        product = await ProductModel.findOneAndUpdate(updateData);
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
