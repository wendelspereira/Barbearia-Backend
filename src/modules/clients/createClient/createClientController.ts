import { Request, Response } from "express";
import { CreateClientUseCase } from "./createClientUseCase";

class CreateClientController {
  async handle(request: Request, response: Response): Promise<void> {
    const data = request.body;
    const createClientUseCase = new CreateClientUseCase();
    await createClientUseCase.execute({ ...data });
  }
}

export {CreateClientController}
