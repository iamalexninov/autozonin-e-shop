const mongoose = require("mongoose");

function startDB() {
  try {
    mongoose.connect(process.env.DB);
    console.log("Connected...");
  } catch (error) {
    console.error(error);
    console.log("Can't connect...");
  }
}

module.exports = startDB;
