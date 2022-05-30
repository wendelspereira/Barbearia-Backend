import { Request, Response } from "express";
import { ICreateOpenHoursDTO } from "../../dtos/ICreateOpenHoursDTO";
import { CreateOpeningHoursUseCase } from "./createOpeningHoursUseCase";

class CreateOpeningHoursController {
  async handle(request: Request, response: Response): Promise<void> {
    const openingHours: ICreateOpenHoursDTO = request.body;
    const createOpeningHoursUseCase = new CreateOpeningHoursUseCase();
    await createOpeningHoursUseCase.execute(openingHours);
    response.send()
  }
}

export { CreateOpeningHoursController };
