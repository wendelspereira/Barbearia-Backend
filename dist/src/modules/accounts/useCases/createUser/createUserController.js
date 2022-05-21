"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserController = void 0;
const createUserUseCase_1 = require("./createUserUseCase");
class CreateUserController {
    async handle(request, response) {
        const { name, email, password } = request.body;
        const createUserUseCase = new createUserUseCase_1.CreateUserUseCase();
        await createUserUseCase.execute({ name, email, password });
        return response.status(200).send();
    }
}
exports.CreateUserController = CreateUserController;
