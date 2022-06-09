"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import dotenv from "dotenv";
const express_1 = __importDefault(require("express"));
require("express-async-errors");
const routes_1 = require("../http/routes");
const AppError_1 = require("../../errors/AppError");
const cors_1 = __importDefault(require("cors"));
// dotenv.config()
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use(routes_1.routes);
app.use((err, request, response, next) => {
    if (err instanceof AppError_1.AppError) {
        response.status(err.statusCode).json({
            message: err.message,
        });
    }
    return response.status(500).json({
        status: "Error",
        message: `Internal server Error - ${err.message}`,
    });
});
app.listen(process.env.PORT || 3333, () => console.log("Server is running!"));
