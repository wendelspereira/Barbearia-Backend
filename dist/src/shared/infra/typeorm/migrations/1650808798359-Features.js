"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Features1650808798359 = void 0;
const typeorm_1 = require("typeorm");
class Features1650808798359 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "features",
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
                    name: "description",
                    type: "varchar",
                },
                {
                    name: "price",
                    type: "varchar",
                },
                {
                    name: "estimatedTime",
                    type: "varchar",
                },
                {
                    name: "isAvailable",
                    type: "Boolean",
                    default: true,
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
        await queryRunner.dropTable("features");
    }
}
exports.Features1650808798359 = Features1650808798359;
