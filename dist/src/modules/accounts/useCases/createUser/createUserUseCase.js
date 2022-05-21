"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserUseCase = void 0;
const UserRepository_1 = require("../../infra/typeorm/repository/UserRepository");
const bcrypt_1 = require("bcrypt");
class CreateUserUseCase {
    async execute({ name, email, password }) {
        const userRepository = new UserRepository_1.UserRepository();
        const passwordHash = await (0, bcrypt_1.hash)(password, 8);
        await userRepository.create({ name, email, password: passwordHash });
    }
}
exports.CreateUserUseCase = CreateUserUseCase;
