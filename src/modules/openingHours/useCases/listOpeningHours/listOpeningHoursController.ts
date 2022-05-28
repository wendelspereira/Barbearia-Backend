import { Request, Response } from "express";
import { ListOpeningHoursUseCase } from "./listOpeningHoursUseCase";

class ListOpeningHoursController {
  async handle(request: Request, response: Response): Promise<void> {
    const listOpeningHoursUseCase = new ListOpeningHoursUseCase();
    const res = await listOpeningHoursUseCase.execute();
    response.json(res)
  }
}

export { ListOpeningHoursController };
