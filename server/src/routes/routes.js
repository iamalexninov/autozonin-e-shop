const routes = require("express").Router();

routes.get("/", (req, res) => {
  res.send("Works.");
});

module.exports = routes;
