import express from "express";
import { createConnection } from "typeorm";
import { routes } from "../http/routes";
createConnection();
const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333, () => console.log("Server is running!"));
