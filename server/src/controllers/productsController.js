const router = require("express").Router();

function getProducts(req, res) {
  // TODO: Select all Products of the DB
}

function getProductByCatalogNumber(req, res) {
  // TODO: Choose a Product by catalog number
}

function createProduct(req, res) {
  // TODO: Create a Product
}

function updateProductByCatalogNumber(req, res) {
  // TODO: Update a Product
}

function markProductAsDeleted(req, res) {
  // TODO: Soft Delete of a Product
}

router.get("/", getProducts);
router.get("/:id", getProductByCatalogNumber);
router.post("/", createProduct);
router.put("/:id", updateProductByCatalogNumber);
router.put("/:id", markProductAsDeleted);

module.exports = router;
