"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const bcrypt_1 = require("bcrypt");
const index_1 = __importDefault(require("../index"));
async function create() {
    const id = (0, uuid_1.v4)();
    const password = await (0, bcrypt_1.hash)("admin", 8);
    const connection = await (0, index_1.default)();
    await connection.query(`INSERT INTO USERS(id, name, password, email, "isAdmin", created_at) values('${id}', 'admin', '${password}', 'admin@alvesbarbearia.com', true, 'now()')`);
    connection.close;
}
create().then(() => console.log("User admin created!"));
// async function create() {
//   const connection = await createConnection();
//   const id = uuidv4();
//   const password = await hash("admin", 8);
//   await connection.query(
//       `INSERT INTO USERS(id, name, password, email, driver_license, "isAdmin", created_at)
//       values('${id}', 'admin', '${password}', 'admin@app.com', 'AAAAAAAAAAAAA', true, 'now()')`
//   );
//   connection.close;
// }
// create().then(() => console.log("User admin created!"));
