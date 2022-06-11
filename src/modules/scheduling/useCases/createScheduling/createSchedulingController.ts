import { Request, Response } from "express";
import { CreateSchedulingUseCase } from "./createSchedulingUseCase";

class CreateSchedulingController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { client, services, schedulingHours } = request.body;

    const createSchedulingUseCase = new CreateSchedulingUseCase();
    

    await createSchedulingUseCase.execute({
      client,
      services,
      schedulingHours,
    });

    return response.json({
      client,
      services,
      schedulingHours,
    });
  }
}

export { CreateSchedulingController };
