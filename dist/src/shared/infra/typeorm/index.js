"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AppError_1 = require("src/shared/errors/AppError");
const typeorm_1 = require("typeorm");
require("dotenv").config();
exports.default = async () => {
    const rootDir = process.env.NODE_ENV === "development" ? "src" : "dist/src";
    const extensionFile = process.env.NODE_ENV === "development" ? "ts" : "js";
    const config = {
        type: "postgres",
        username: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME,
        port: process.env.DATABASE_PORT,
        host: process.env.DATABASE_HOST,
        ssl: true,
        extra: {
            ssl: {
                rejectUnauthorized: false,
            },
        },
        entities: [`${rootDir}/**/**.entity.${extensionFile}`],
        migrations: [`${rootDir}/**/migrations/*.${extensionFile}`],
        cli: {
            migrationsDir: `${rootDir}/shared/infra/typeorm/migrations`,
        },
    };
    return (0, typeorm_1.createConnection)(config).catch((err) => {
        throw new AppError_1.AppError("Error on connect to database" + err);
    });
};
