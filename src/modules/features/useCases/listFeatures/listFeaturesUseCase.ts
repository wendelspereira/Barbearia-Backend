import { FeatureRepository } from "../../infra/repository/FeatureRepository";

class ListFeaturesUseCase {
  async execute() {
    const featureRepository = new FeatureRepository();

    const features = await featureRepository.list();

    return features;
  }
}

export { ListFeaturesUseCase };
