"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const bcrypt_1 = require("bcrypt");
// import "../"
const __1 = __importDefault(require("../"));
async function create() {
    console.log(1);
    const connection = await (0, __1.default)("ec2-52-4-104-184.compute-1.amazonaws.com");
    console.log(2);
    const id = (0, uuid_1.v4)();
    const password = await (0, bcrypt_1.hash)("admin", 8);
    await connection.query(`INSERT INTO USERS(id, name, password, email, "isAdmin", created_at) 
        values('${id}', 'admin', '${password}', 'admin@alvesbarbearia.com', true, 'now()')`);
    connection.close;
}
create().then(() => console.log("User admin created!"));
