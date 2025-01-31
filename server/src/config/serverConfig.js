const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const routes = require("../routes/routes");

module.exports = () => {
  const app = express();

  dotenv.config();
  // todo: db connection

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors());

  app.use("/api", routes);

  app.listen(process.env.PORT, () => console.log("Server On."));
};
