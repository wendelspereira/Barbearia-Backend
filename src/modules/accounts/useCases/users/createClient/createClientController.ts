import { Request, Response } from "express";
import { CreateClientUseCase } from "./createClientUseCase";

class CreateClientController {
  async handle(request: Request, response: Response): Promise<void> {
    const { name, phoneNumber } = request.body;

    const createClientUseCase = new CreateClientUseCase();
    await createClientUseCase.execute({ name, phoneNumber });
  }
}

export {CreateClientController}
