import { ICreateFeatureDTO } from "../../dtos/ICreateFeatureDTO";
import { AppError } from "../../../../shared/errors/AppError";
import { FeatureRepository } from "../../infra/repository/FeatureRepository";

class CreateFeatureUseCase {
  async execute({
    name,
    description,
    price,
    isAvailable,
    estimatedTime,
  }: ICreateFeatureDTO) {
    const featureRepository = new FeatureRepository();

    const featureAlreadyExists = await featureRepository.findByName(name);

    if (featureAlreadyExists) {
      throw new AppError("Feature already exists!");
    }

    await featureRepository.create({
      name,
      description,
      price,
      isAvailable,
      estimatedTime,
    });
  }
}

export { CreateFeatureUseCase };
