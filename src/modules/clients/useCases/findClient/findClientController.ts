import { Request, Response } from "express";
import { Client } from "../../entities/Client";
import { FindClientUseCase } from "./findClientUseCase";

class FindClientController {
  async handle(request: Request, response: Response): Promise<Response<Client>> {
    const {id} = request.body;
    const findClientUseCase = new FindClientUseCase();
    const result = await findClientUseCase.execute(id);
    return response.json(result)
  }
}

export { FindClientController };
