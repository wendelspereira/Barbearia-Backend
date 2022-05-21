"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListSchedulingsUseCase = void 0;
const SchedulingRepository_1 = require("../../infra/typeorm/repository/SchedulingRepository");
class ListSchedulingsUseCase {
    async execute() {
        const schedulingRepository = new SchedulingRepository_1.SchedulingRepository();
        const schedulings = schedulingRepository.list();
        return schedulings;
    }
}
exports.ListSchedulingsUseCase = ListSchedulingsUseCase;
