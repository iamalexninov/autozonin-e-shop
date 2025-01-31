const router = require("express").Router();

function getProducts(req, res) {
  res.json({
    _id: "OX510"
  });
}

router.get("/", getProducts);

module.exports = router;
