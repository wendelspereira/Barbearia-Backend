import { createConnection, Connection } from "typeorm";
require("dotenv").config();

const rootDir = process.env.NODE_ENV === "development" ? "src" : "dist";
const extensionFile = process.env.NODE_ENV === "development" ? "ts" : "js";

const config: any = {
  type: "mongodb",
  url: process.env.DATABASE_URI,
  synchronize: false,
  ssl: true,
  extra: {
    ssl: {
      rejectUnauthorized: false,
    },
  },

  entities: [`${rootDir}/**/*.entity.${extensionFile}`],
  migrations: [`${rootDir}/**/migrations/*.${extensionFile}`],

  cli: {
    migrationsDir: `${rootDir}/shared/infra/typeorm/migrations`,
  },
};

export default async (): Promise<Connection> => {
  return createConnection(config);
};
