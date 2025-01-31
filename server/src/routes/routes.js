const router = require("express").Router();

const productsController = require('../controllers/productsController');

router.use('/products', productsController);

module.exports = router;