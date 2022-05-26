// import { createConnection } from "typeorm";

// const rootDir = process.env.NODE_ENV === "development" ? "src" : "dist/src";
// const extensionFile = process.env.NODE_ENV === "development" ? "ts" : "js";

// const config: any = {
//   type: "postgres",
//   username: process.env.DATABASE_USER,
//   password: process.env.DATABASE_PASSWORD,
//   database: process.env.DATABASE_NAME,
//   port: process.env.DATABASE_PORT,
//   host: process.env.DATABASE_HOST,
//   synchronize: process.env.DATABASE_SYNCHRONIZE,
//   ssl: true,
//   extra: {
//     ssl: {
//       rejectUnauthorized: false,
//     },
//   },

//   entities: [`${rootDir}/**/*.entity.${extensionFile}`],
//   migrations: [`${rootDir}/**/migrations/*.${extensionFile}`],

//   cli: {
//     migrationsDir: `${rootDir}/shared/infra/typeorm/migrations`,
//   },
// };

// createConnection(config).catch((err) => console.log(err));

//******************************************************************************* */

import { createConnection, Connection } from "typeorm";
require("dotenv").config();

const rootDir = process.env.NODE_ENV === "development" ? "src" : "dist";
const extensionFile = process.env.NODE_ENV === "development" ? "ts" : "js";

const config: any = {
  type: "postgres",
  // username: process.env.DATABASE_USER,
  // password: process.env.DATABASE_PASSWORD,
  // database: process.env.DATABASE_NAME,
  // port: process.env.DATABASE_PORT,
  // host: process.env.DATABASE_HOST,
  url: process.env.DATABASE_URI,
  // synchronize: process.env.DATABASE_SYNCHRONIZE,
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
