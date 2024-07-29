require("dotenv").config();
const express = require("express");
const db = require("./config/db");

run();

function run() {
  const app = express();

  db();

  app.listen(process.env.PORT, () =>
    console.log(`Server on: ${process.env.PORT}`)
  );
}
