import { Request, Response } from "express";
import { CreateUserUseCase } from "./createUserUseCase";

class CreateUserController {
  async handle(request: Request, response: Response) {
    const { name, email, password } = request.body;
    const createUserUseCase = new CreateUserUseCase();

    await createUserUseCase.execute({ name, email, password });

    return response.status(200).send();
  }
}

export { CreateUserController };
