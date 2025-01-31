const mongoose = require("mongoose");
const insertMetadata = require("../utils/insertMetadataTesting");

function DBConnection(app) {
  mongoose
    .connect(process.env.DB_CONNECTION)
    .then(() => {
      console.log("DB Connection On.");

      // TODO: Remove Later
      insertMetadata();
    })
    .catch((error) => {
      console.error(error.message);
      console.log("Error DB Connection");
    });
}

module.exports = {
  DBConnection,
};
