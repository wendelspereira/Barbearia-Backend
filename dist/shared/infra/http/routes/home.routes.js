"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.homeRoutes = void 0;
const express_1 = require("express");
const homeRoutes = (0, express_1.Router)();
exports.homeRoutes = homeRoutes;
homeRoutes.get("/", (req, res) => res.json({ response: "Welcome to Alves Barber" }));
