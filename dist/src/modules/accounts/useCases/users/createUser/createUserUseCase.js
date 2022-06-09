"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserUseCase = void 0;
const UserRepository_1 = require("../../../../accounts/infra/mongoose/repository/UserRepository");
const AppError_1 = require("../../../../../shared/errors/AppError");
class CreateUserUseCase {
    async execute(data) {
        const userRepository = new UserRepository_1.UserRepository();
        const { email } = data;
        const userAlreadyExists = await userRepository.findByEmail(email);
        if (userAlreadyExists) {
            throw new AppError_1.AppError("User already exists");
        }
        const result = await userRepository.create(data);
        result.password = undefined;
        return result;
    }
}
exports.CreateUserUseCase = CreateUserUseCase;
