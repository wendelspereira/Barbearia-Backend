import { Request, Response } from "express";
import { Client } from "../../entities/Client";
import { CreateClientUseCase } from "./createClientUseCase";

class CreateClientController {
  async handle(request: Request, response: Response): Promise<Response<Client>> {
    const data = request.body;
    const createClientUseCase = new CreateClientUseCase();
    const result = await createClientUseCase.execute({ ...data });
    return response.json(result)
  }
}

export {CreateClientController}
