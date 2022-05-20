import express from "express";
import { createConnection } from "typeorm";
import { routes } from "../http/routes";

const app = express();

createConnection().then(async (con) => {
  app.use(express.json());
  app.use(routes);
  app.listen(process.env.PORT || 3333, () => console.log("Server is running!"));
});
