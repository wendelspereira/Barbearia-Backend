import dotenv from "dotenv";
import express from "express";
import { createConnection } from "typeorm";
import { routes } from "../http/routes";

dotenv.config();
const app = express();
const host = process.env.DATABASE_HOST
createConnection(String(host)).then(async (con) => {
  app.use(express.json());
  app.use(routes);
  app.listen(process.env.PORT || 3333, () => console.log("Server is running!"));
});
