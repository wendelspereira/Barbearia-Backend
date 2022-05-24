import { ICreateFeatureDTO } from "../../dtos/ICreateFeature";
import { FeaturesRepository } from "../../infra/typeorm/repository/featuresRepository";
import { AppError } from "../../../../shared/errors/AppError";

class CreateFeatureUseCase {
  async execute({
    name,
    description,
    price,
    isAvailable,
    estimatedTime,
  }: ICreateFeatureDTO) {
    const featuresRepository = new FeaturesRepository();

    const featuresAlreadyExists = await featuresRepository.findByName(name);

    if (featuresAlreadyExists) {
      throw new AppError("Feature already exists!");
    }

    await featuresRepository.create({
      name,
      description,
      price,
      isAvailable,
      estimatedTime,
    });
  }
}

export { CreateFeatureUseCase };
