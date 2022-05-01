"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schedulingRoutes = void 0;
const express_1 = require("express");
const schedulingRoutes = (0, express_1.Router)();
exports.schedulingRoutes = schedulingRoutes;
schedulingRoutes.get("/", (req, res) => {
    res.send("Schedulings");
});
