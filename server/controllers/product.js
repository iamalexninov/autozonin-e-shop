const router = require("express").Router();
const { addProduct } = require("../services/product");

async function uploadProduct(req, res) {
  const data = {
    name: req.body.name,
    brand: req.body.brand,
    model: req.body.model,
    category: req.body.category,
    price: req.body.price,
    stock: req.body.stock,
    description: req.body.description,
    compatibility: req.body.compatibility,
  };

  try {
    const product = await addProduct(data);
    res.status(204).json("Product created.");
  } catch (error) {
    // TODO: error
    res.status(401).json(error);
  }
}

router.post("/create", uploadProduct);

module.exports = router;
