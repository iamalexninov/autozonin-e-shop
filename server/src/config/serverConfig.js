const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");

module.exports = () => {
  const app = express();

  dotenv.config();
  // todo: db connection

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors());

  // todo: routes

  app.listen(process.env.PORT, () => console.log("Server On."));
};