import { ICreateFeatureDTO } from "../dtos/ICreateFeature";
import { Feature } from "../infra/typeorm/entities/Feature.entity";

interface IFeaturesRepository {
  create: (data: ICreateFeatureDTO) => Promise<void>;
  list: () => Promise<Feature[] | undefined>;
  findById: (id: string) => Promise<Feature | undefined>;
  findByName: (name: string) => Promise<Feature | undefined>;
  // delete: (id: string) => Promise<void>;
  // update: (id: string) => Promise<void>;
}

export { IFeaturesRepository };
