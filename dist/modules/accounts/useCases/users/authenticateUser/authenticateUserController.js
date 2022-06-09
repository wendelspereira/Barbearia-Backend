"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticateUserController = void 0;
const authenticateUserUseCase_1 = require("./authenticateUserUseCase");
class AuthenticateUserController {
    async handle(request, response) {
        const { email, password } = request.body;
        const authenticateUseCase = new authenticateUserUseCase_1.AuthenticateUseCase();
        const result = await authenticateUseCase.execute({ email, password });
        return response.send(result);
    }
}
exports.AuthenticateUserController = AuthenticateUserController;
