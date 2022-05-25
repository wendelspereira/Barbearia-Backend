import { createConnection, Connection } from "typeorm";
import { AppError } from "../../errors/AppError";
require("dotenv").config();

const rootDir = process.env.NODE_ENV === "development" ? "src" : "dist/src";
const extensionFile = process.env.NODE_ENV === "development" ? "ts" : "js";

const config: any = {
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

console.log(`${rootDir}/**/**.entity.${extensionFile}`);

createConnection(config).catch((err) => console.log(err));
