"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticateUseCase = void 0;
const UserRepository_1 = require("../../infra/typeorm/repository/UserRepository");
const bcrypt_1 = require("bcrypt");
const jsonwebtoken_1 = require("jsonwebtoken");
class AuthenticateUseCase {
    async execute({ email, password }) {
        const userRepository = new UserRepository_1.UserRepository();
        const user = await userRepository.findByEmail(email);
        if (!user) {
            throw new Error("User not found!");
        }
        const passwordMatch = await (0, bcrypt_1.compare)(password, user.password);
        if (!passwordMatch) {
            throw new Error("Email or password is incorrect!");
        }
        const token = (0, jsonwebtoken_1.sign)({}, "79dd89f39b52b083b7a801278d584872", {
            subject: user.id,
            expiresIn: "1d",
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
