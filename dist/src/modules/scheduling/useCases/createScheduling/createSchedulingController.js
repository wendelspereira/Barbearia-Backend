"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSchedulingController = void 0;
const createSchedulingUseCase_1 = require("./createSchedulingUseCase");
class CreateSchedulingController {
    async handle(request, response) {
        const { client, services, schedulingHours } = request.body;
        const createSchedulingUseCase = new createSchedulingUseCase_1.CreateSchedulingUseCase();
        await createSchedulingUseCase.execute({
            client,
            services,
            schedulingHours,
        });
        return response.json({
            client,
            services,
            schedulingHours,
        });
    }
}
exports.CreateSchedulingController = CreateSchedulingController;
