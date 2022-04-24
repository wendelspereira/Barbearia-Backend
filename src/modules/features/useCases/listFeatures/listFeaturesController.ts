import { Request, Response } from "express";
import { ListFeaturesUseCase } from "./listFeaturesUseCase";

class ListFeaturesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listFeaturesUseCase = new ListFeaturesUseCase();

    const features = await listFeaturesUseCase.execute();

    return response.json(features);
  }
}

export { ListFeaturesController };
