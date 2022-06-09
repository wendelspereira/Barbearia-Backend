"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserController = void 0;
const createUserUseCase_1 = require("./createUserUseCase");
class CreateUserController {
    async handle(request, response) {
        const data = request.body;
        const createUserUseCase = new createUserUseCase_1.CreateUserUseCase();
        const result = await createUserUseCase.execute(data);
        return response.status(200).send(result);
    }
}
exports.CreateUserController = CreateUserController;
