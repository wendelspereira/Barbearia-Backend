import { Request, Response } from "express";
import { ICreateOpenHoursDTO } from "../../dtos/ICreateOpenHoursDTO";
import { CreateOpeningHoursUseCase } from "./CreateOpeningHoursUseCase";

class CreateOpeningHoursController {
  async handle(request: Request, response: Response): Promise<void> {
    const openinghours: string = request.body;
    const createOpeningHoursUseCase = new CreateOpeningHoursUseCase();
    await createOpeningHoursUseCase.execute(openinghours);
    response.send()
  }
}

export { CreateOpeningHoursController };
