"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = __importDefault(require("express"));
const scheduling_routes_1 = require("../routes/scheduling.routes");
const routes = (0, express_1.default)();
exports.routes = routes;
routes.use('/scheduling', scheduling_routes_1.schedulingRoutes);
