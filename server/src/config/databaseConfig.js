const mongoose = require("mongoose");

function DBConnection(app) {
  mongoose
    .connect(process.env.DB_CONNECTION)
    .then(() => console.log("DB Connection On."))
    .catch((error) => {
      console.error(error.message);
      console.log("Error DB Connection");
    });
}

module.exports = {
  DBConnection,
};
