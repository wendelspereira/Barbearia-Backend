import { ICreateFeatureDTO } from "../../dtos/ICreateFeatureDTO";
import { Feature } from "../../entities/Feature";
import { IFeaturesRepository } from "../../repository/IFeaturesRepository";
import { FeatureModel } from "../Schemas/Feature";

class FeatureRepository implements IFeaturesRepository {
  async create(data: ICreateFeatureDTO): Promise<Feature> {
    const feature = new FeatureModel({ ...data });
    const result = await feature.save();
    return result;
  }

  async list(): Promise<Feature[] | undefined> {
    const features = await FeatureModel.find();
    return features;
  }

  async findById(id: string): Promise<Feature | undefined> {
    const feature = await FeatureModel.findById({ id: id });
    return feature;
  }

  async findByName(name: string): Promise<Feature | undefined> {
    const feature = await FeatureModel.findOne({ name: name });
    return feature;
  }
}

export { FeatureRepository };
