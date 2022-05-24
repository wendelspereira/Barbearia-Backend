import { getRepository, Repository } from "typeorm";
import { ICreateFeatureDTO } from "../../../dtos/ICreateFeature";
import { IFeaturesRepository } from "../../../repository/IFeaturesRepository";
import { Feature } from "../entities/Feature.entity";
import { AppError } from "../../../../../shared/errors/AppError";


class FeaturesRepository implements IFeaturesRepository {
  find() {
    throw new AppError("Method not implemented.");
  }
  private repository: Repository<Feature>;
  constructor() {
    this.repository = getRepository(Feature);
  }

  async create(data: ICreateFeatureDTO): Promise<void> {
    const feature = this.repository.create({ ...data });
    await this.repository.save(feature);
  }

  async list(): Promise<Feature[] | undefined> {
    const features = await this.repository.find();
    return features;
  }

  async findByName(name: string): Promise<Feature | undefined> {
    const feature = await this.repository.findOne({ name });

    return feature;
  }
  
  async findById(id: string): Promise<Feature | undefined> {
    const feature = await this.repository.findOne(id);
    return feature;
  }
}

export { FeaturesRepository };
