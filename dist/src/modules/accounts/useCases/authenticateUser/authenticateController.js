"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticateController = void 0;
const authenticateUseCase_1 = require("./authenticateUseCase");
class AuthenticateController {
    async handle(request, response) {
        const { email, password } = request.body;
        const authenticateUseCase = new authenticateUseCase_1.AuthenticateUseCase();
        const result = await authenticateUseCase.execute({ email, password });
        return response.json(result);
    }
}
exports.AuthenticateController = AuthenticateController;
