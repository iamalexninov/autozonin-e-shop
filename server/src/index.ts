import dotenv from "dotenv";
import express from "express";
import routes from "./routes/routes";
import cors from "cors";

start();

function start() {
  const app = express();

  dotenv.config();

  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use("/api", routes);

  app.listen(3000, () => console.log("Server is running."));
}
