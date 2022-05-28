import { ICreateFeatureDTO } from "../../dtos/ICreateFeatureDTO";
import { FeaturesRepository } from "../../infra/typeorm/repository/featuresRepository";

class ListFeaturesUseCase {
  async execute() {
    const featuresRepository = new FeaturesRepository();

    const features = await featuresRepository.list();

    return features;
  }
}

export { ListFeaturesUseCase };
