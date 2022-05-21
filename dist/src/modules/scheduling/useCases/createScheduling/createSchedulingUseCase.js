"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSchedulingUseCase = void 0;
const SchedulingRepository_1 = require("../../infra/typeorm/repository/SchedulingRepository");
class CreateSchedulingUseCase {
    async execute({ client, services, schedulingHours }) {
        const schedulingRepository = new SchedulingRepository_1.SchedulingRepository();
        await schedulingRepository.create({ client, services, schedulingHours });
    }
}
exports.CreateSchedulingUseCase = CreateSchedulingUseCase;
