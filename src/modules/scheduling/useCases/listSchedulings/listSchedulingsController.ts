import { Request, Response } from "express";
import { ListSchedulingsUseCase } from "./listSchedulingsUseCase";

class ListSchedulingsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listSchedulingUseCase = new ListSchedulingsUseCase();

    const schedulings = await listSchedulingUseCase.execute();

    return response.json(schedulings);
  }
}

export { ListSchedulingsController };
