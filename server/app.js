require("dotenv").config();
const express = require("express");
const db = require("./config/db");
const routes = require("./routes");

run();

function run() {
  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({ extends: true }));

  db();

  app.use("/api", routes);

  app.listen(process.env.PORT, () =>
    console.log(`Server on: ${process.env.PORT}`)
  );
}
