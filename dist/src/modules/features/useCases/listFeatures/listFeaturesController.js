"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListFeaturesController = void 0;
const listFeaturesUseCase_1 = require("./listFeaturesUseCase");
class ListFeaturesController {
    async handle(request, response) {
        const listFeaturesUseCase = new listFeaturesUseCase_1.ListFeaturesUseCase();
        const features = await listFeaturesUseCase.execute();
        return response.json(features);
    }
}
exports.ListFeaturesController = ListFeaturesController;
