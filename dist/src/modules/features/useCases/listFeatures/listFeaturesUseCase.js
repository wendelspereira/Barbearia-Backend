"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListFeaturesUseCase = void 0;
const featuresRepository_1 = require("../../infra/typeorm/repository/featuresRepository");
class ListFeaturesUseCase {
    async execute() {
        const featuresRepository = new featuresRepository_1.FeaturesRepository();
        const features = await featuresRepository.list();
        return features;
    }
}
exports.ListFeaturesUseCase = ListFeaturesUseCase;
