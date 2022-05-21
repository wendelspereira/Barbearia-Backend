"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const typeorm_1 = require("typeorm");
const routes_1 = require("../http/routes");
dotenv_1.default.config();
const app = (0, express_1.default)();
(0, typeorm_1.createConnection)().then(async (con) => {
    app.use(express_1.default.json());
    app.use(routes_1.routes);
    app.listen(process.env.PORT || 3333, () => console.log("Server is running!"));
});
