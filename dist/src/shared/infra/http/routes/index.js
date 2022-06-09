"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = __importDefault(require("express"));
const accounts_routes_1 = require("../routes/accounts.routes");
const home_routes_1 = require("./home.routes");
// import { authenticateRoutes } from "./authencate.routes";
// import { schedulingRoutes } from "../routes/scheduling.routes";
// import { featureRoutes } from "./features.routes";
// import { openingHoursRoutes } from "./openinghours.routes";
const routes = (0, express_1.default)();
exports.routes = routes;
routes.use("/", home_routes_1.homeRoutes);
routes.use("/users", accounts_routes_1.accountRoutes);
