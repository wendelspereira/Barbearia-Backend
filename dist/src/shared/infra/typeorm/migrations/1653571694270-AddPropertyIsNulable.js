"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddPropertyIsNulable1653571694270 = void 0;
const typeorm_1 = require("typeorm");
class AddPropertyIsNulable1653571694270 {
    async up(queryRunner) {
        await queryRunner.changeColumn("features", "id", new typeorm_1.TableColumn({
            name: "id",
            type: "uuid",
            isPrimary: true,
            isNullable: false,
        }));
        await queryRunner.changeColumn("users", "id", new typeorm_1.TableColumn({
            name: "id",
            type: "uuid",
            isPrimary: true,
            isNullable: false,
        }));
    }
    async down(queryRunner) {
        await queryRunner.changeColumn("features", "id", new typeorm_1.TableColumn({
            name: "id",
            type: "uuid",
            isPrimary: true,
        }));
        await queryRunner.changeColumn("users", "id", new typeorm_1.TableColumn({
            name: "id",
            type: "uuid",
            isPrimary: true,
        }));
    }
}
exports.AddPropertyIsNulable1653571694270 = AddPropertyIsNulable1653571694270;
