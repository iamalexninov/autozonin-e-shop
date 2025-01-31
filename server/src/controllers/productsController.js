const router = require("express").Router();
const ProductModel = require("../models/ProductModel");
const productsService = require("../services/productsService");

function loadProducts(req, res) {
  return productsService
    .fetchAllProducts()
    .then((products) => {
      res.status(200).json({ success: true, data: products });
    })
    .catch((err) => {
      console.error("Error fetching products: ", err);

      res.status(500).json({
        success: false,
        message: "Failed to fetch products",
        error: err.message,
      });
    });
}

function loadProductByCatalogNumber(req, res) {
  const { id } = req.params;

  // Test: BD123
  return productsService
    .fetchProductByCatalogNumber(id)
    .then((product) => {
      res.status(200).json({ success: true, data: product });
    })
    .catch((err) => {
      console.error("Error fetching products: ", err);

      res.status(500).json({
        success: false,
        message: "Failed to fetch products",
        error: err.message,
      });
    });
}

function buildProduct(req, res) {
  return productsService
    .insertProduct(req.body)
    .then((product) => {
      res.status(200).json({ success: true, data: product });
    })
    .catch((err) => {
      console.error("Error creating product:", err);

      res.status(500).json({
        success: false,
        message: "Failed to create product",
        error: err.message,
      });
    });
}

function updateProductByCatalogNumber(req, res) {
  // TODO: Update a Product
}

function markProductAsDeleted(req, res) {
  // TODO: Soft Delete of a Product
}

router.get("/", loadProducts);
router.get("/:id", loadProductByCatalogNumber);
router.post("/", buildProduct);
router.put("/:id", updateProductByCatalogNumber);
router.put("/:id", markProductAsDeleted);

module.exports = router;
