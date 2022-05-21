"use strict";
// import {createConnection, Connection, getConnectionOptions} from "typeorm";
Object.defineProperty(exports, "__esModule", { value: true });
// export default async (host = "localhost"): Promise<Connection> => {
//     const defaultOptions = await getConnectionOptions()
//     return createConnection(
//         Object.assign(defaultOptions, {
//             host
//         })
//     )
// }
const typeorm_1 = require("typeorm");
(0, typeorm_1.createConnection)();
