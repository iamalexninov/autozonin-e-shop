const router = require("express").Router();

const productController = require("./controllers/product");

router.use("/catalog", productController);

module.exports = router;
