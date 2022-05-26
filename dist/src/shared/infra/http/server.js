"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
require("express-async-errors");
const routes_1 = require("../http/routes");
const AppError_1 = require("../../errors/AppError");
const typeorm_1 = __importDefault(require("../typeorm"));
dotenv_1.default.config();
const app = (0, express_1.default)();
console.log('Connecting...');
(0, typeorm_1.default)()
    .then(() => {
    console.log('Connected with database');
    app.use(express_1.default.json());
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
})
    .catch((err) => console.log(err));
