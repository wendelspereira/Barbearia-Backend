import { Request, Response } from "express";
import { ICreateFeatureDTO } from "../../dtos/ICreateFeatureDTO";
import { CreateFeatureUseCase } from "./createFeatureUseCase";

class CreateFeatureController {
  
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      name,
      description,
      price,
      isAvailable,
      estimatedTime,
    }: ICreateFeatureDTO = request.body;

    const createFeatureUseCase = new CreateFeatureUseCase();

    await createFeatureUseCase.execute({
      name,
      description,
      price,
      isAvailable,
      estimatedTime,
    });

    return response.status(201).send("Feature created!");
  }
}

export { CreateFeatureController };
