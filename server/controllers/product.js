const router = require("express").Router();
const {
  getProducts,
  getProduct,
  addProduct,
  changeProduct,
} = require("../services/product");

async function showProducts(req, res) {
  // TODO: search functionality - future
  try {
    const products = await getProducts();
    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.status(204).json(error);
  }
}

async function showProduct(req, res) {
  const id = req.params.id;

  try {
    const product = await getProduct(id);
    res.status(200).json(product);
  } catch (error) {
    console.error(error);
    res.status(204).json(error);
  }
}

async function createProduct(req, res) {
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
    res.status(201).json({ product, msg: "Product was successfully created." });
  } catch (error) {
    // TODO: error
    res.status(401).json(error);
  }
}

async function editProduct(req, res) {
  const id = req.params.id;
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
    const product = await changeProduct(id, data);
    res.status(201).json({ product, msg: "Product was successfully changed." });
  } catch (error) {
    console.error(error);
    res.status(204).json(error);
  }
}

router.get("/", showProducts);
router.get("/:id", showProduct);
router.post("/create", createProduct);
router.put("/edit/:id", editProduct);

module.exports = router;
