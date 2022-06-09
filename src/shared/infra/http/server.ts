import { config } from "dotenv";
import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import { routes } from "../http/routes";
import { AppError } from "../../errors/AppError";
import cors from "cors";
config()

const app = express();
app.use(express.json());
app.use(cors());
app.use(routes);
app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      response.status(err.statusCode).json({
        message: err.message,
      });
    }

    return response.status(500).json({
      status: "Error",
      message: `Internal server Error - ${err.message}`,
    });
  }
);

app.listen(process.env.PORT || 3333, () => console.log("Server is running!"));
