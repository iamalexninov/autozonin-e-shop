const router = require("express").Router();

const productController = require("./controllers/product");
const authController = require("./controllers/auth");

router.use("/catalog", productController);
router.use("/user", authController);

module.exports = router;
