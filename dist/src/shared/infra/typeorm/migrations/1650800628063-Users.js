"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users1650800628063 = void 0;
const typeorm_1 = require("typeorm");
class Users1650800628063 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "users",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true,
                },
                {
                    name: "name",
                    type: "varchar",
                },
                {
                    name: "password",
                    type: "varchar",
                },
                {
                    name: "email",
                    type: "varchar",
                },
                {
                    name: "isAdmin",
                    type: "Boolean",
                    default: false,
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: "now()",
                },
            ],
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable("users");
    }
}
exports.Users1650800628063 = Users1650800628063;
