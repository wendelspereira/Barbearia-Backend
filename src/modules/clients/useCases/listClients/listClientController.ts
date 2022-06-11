import { Request, Response } from "express";
import { Client } from "../../entities/Client";
import { ListClientUseCase } from "./listClientUseCase";

class ListClientController {
  async handle(request: Request, response: Response) {
    const listClientUseCase = new ListClientUseCase();
    const result = await listClientUseCase.execute();
    return response.json(result)
  }
}

export { ListClientController };
