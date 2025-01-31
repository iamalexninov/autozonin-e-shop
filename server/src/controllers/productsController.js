const router = require("express").Router();
const productsService = require("../services/productsService");

function loadProducts(req, res) {
  return productsService
    .fetchAllProducts()
    .then((products) => {
      res.status(200).json({ success: true, data: products });
    })
    .catch((error) => {
      console.error("Error fetching products: ", error);
      res
        .status(500)
        .json({
          success: false,
          message: "Failed to fetch products",
          error: error.message,
        });
    });
}

function loadProductByCatalogNumber(req, res) {
  // TODO: Choose a Product by catalog number
}

function buildProduct(req, res) {
  // TODO: Create a Product
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
