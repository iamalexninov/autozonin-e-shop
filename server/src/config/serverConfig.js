require('dotenv').config();

const express = require("express");
const cors = require("cors");
const { DBConnection } = require("./databaseConfig");
const routes = require("../routes/routes");

module.exports = () => {
  const app = express();

  DBConnection(app);

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors());

  app.use("/api", routes);

  app.listen(process.env.PORT, () => console.log("Server On."));
};
