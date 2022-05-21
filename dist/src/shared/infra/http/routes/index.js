"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = __importDefault(require("express"));
const scheduling_routes_1 = require("../routes/scheduling.routes");
const accounts_routes_1 = require("./accounts.routes");
const features_routes_1 = require("./features.routes");
const home_routes_1 = require("./home.routes");
const routes = (0, express_1.default)();
exports.routes = routes;
routes.use('/', home_routes_1.homeRoutes);
routes.use('/scheduling', scheduling_routes_1.schedulingRoutes);
routes.use('/users', accounts_routes_1.accountRoutes);
routes.use('/features', features_routes_1.featureRoutes);
