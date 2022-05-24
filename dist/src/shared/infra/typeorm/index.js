"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
exports.default = async (host = "localhost") => {
    const defaultOptions = await (0, typeorm_1.getConnectionOptions)();
    return (0, typeorm_1.createConnection)(Object.assign(defaultOptions, {
        host,
    }));
};
(0, typeorm_1.createConnection)();
// import {parse} from "path";
// import { createConnection, Connection } from "typeorm";
// export default async (): Promise<Connection> => {
//     // const {root} = path.parse()
//     const config: any = {
//     type: "postgres",
//     username: process.env.DATABASE_USER,
//     password: process.env.DATABASE_PASSWORD,
//     database: process.env.DATABASE_NAME,
//     port: process.env.DATABASE_PORT,
//     host: process.env.DATABASE_HOST,
//     ssl: true,
//     extra: {
//       ssl: {
//         rejectUnauthorized: false,
//       },
//     },
//     migrations: ["src/shared/infra/typeorm/migrations/*.js,*.ts"],
//     cli: {
//       migrationsDir: "src/shared/infra/typeorm/migrations",
//     },
//     entities: [
//       "src/modules/accounts/infra/typeorm/entities/*.js,*.ts",
//       "src/modules/features/infra/typeorm/entities/*.js,*.ts",
//     ],
//   };
//   return createConnection(config);
// };
