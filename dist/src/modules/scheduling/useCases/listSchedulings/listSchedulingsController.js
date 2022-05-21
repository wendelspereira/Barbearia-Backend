"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListSchedulingsController = void 0;
const listSchedulingsUseCase_1 = require("./listSchedulingsUseCase");
class ListSchedulingsController {
    async handle(request, response) {
        const listSchedulingUseCase = new listSchedulingsUseCase_1.ListSchedulingsUseCase();
        const schedulings = await listSchedulingUseCase.execute();
        return response.json(schedulings);
    }
}
exports.ListSchedulingsController = ListSchedulingsController;
