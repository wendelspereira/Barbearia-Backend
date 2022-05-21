"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateFeatureController = void 0;
const createFeatureUseCase_1 = require("./createFeatureUseCase");
class CreateFeatureController {
    async handle(request, response) {
        const { name, description, price, isAvailable, estimatedTime, } = request.body;
        const createFeatureUseCase = new createFeatureUseCase_1.CreateFeatureUseCase();
        await createFeatureUseCase.execute({
            name,
            description,
            price,
            isAvailable,
            estimatedTime,
        });
        return response.status(201).send("Feature created!");
    }
}
exports.CreateFeatureController = CreateFeatureController;
