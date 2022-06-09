"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensureAuthenticated = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const UserRepository_1 = require("../../../../modules/accounts/infra/mongoose/repository/UserRepository");
const AppError_1 = require("../../../errors/AppError");
async function ensureAuthenticated(request, response, next) {
    const authHeader = request.headers.authorization;
    if (!authHeader) {
        throw new AppError_1.AppError("Token missing");
    }
    const [, token] = authHeader.split(" ");
    try {
        const { sub: user_id } = (0, jsonwebtoken_1.verify)(token, "79dd89f39b52b083b7a801278d584872");
        const userRepository = new UserRepository_1.UserRepository();
        const user = await userRepository.findById(user_id);
        if (!user) {
            throw new AppError_1.AppError("User doesn't exists!");
        }
        request.user = {
            id: user_id
        };
        next();
    }
    catch (error) {
        throw new AppError_1.AppError("Invalid token");
    }
}
exports.ensureAuthenticated = ensureAuthenticated;
