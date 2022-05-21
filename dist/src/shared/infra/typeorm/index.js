"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
exports.default = async (host = "localhost") => {
    const defaultOptions = await (0, typeorm_1.getConnectionOptions)();
    return (0, typeorm_1.createConnection)(Object.assign(defaultOptions, {
        host
    }));
};
