"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateFeatureUseCase = void 0;
const featuresRepository_1 = require("../../infra/typeorm/repository/featuresRepository");
const AppError_1 = require("../../../../shared/errors/AppError");
class CreateFeatureUseCase {
    async execute({ name, description, price, isAvailable, estimatedTime, }) {
        const featuresRepository = new featuresRepository_1.FeaturesRepository();
        const featuresAlreadyExists = await featuresRepository.findByName(name);
        if (featuresAlreadyExists) {
            throw new AppError_1.AppError("Feature already exists!");
        }
        await featuresRepository.create({
            name,
            description,
            price,
            isAvailable,
            estimatedTime,
        });
    }
}
exports.CreateFeatureUseCase = CreateFeatureUseCase;
