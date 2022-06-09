"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticateUseCase = void 0;
const UserRepository_1 = require("../../../infra/mongoose/repository/UserRepository");
const jsonwebtoken_1 = require("jsonwebtoken");
class AuthenticateUseCase {
    async execute({ email, password }) {
        const userRepository = new UserRepository_1.UserRepository();
        const user = await userRepository.checkPassword(email, password);
        const token = (0, jsonwebtoken_1.sign)({}, "79dd89f39b52b083b7a801278d584872", {
            subject: user.id.toString(),
            expiresIn: "30d",
        });
        const response = {
            user: {
                name: user.name,
                email,
            },
            token,
        };
        return response;
    }
}
exports.AuthenticateUseCase = AuthenticateUseCase;
