import { ICreateFeatureDTO } from "../dtos/ICreateFeatureDTO";
import { Feature } from "../entities/Feature";

interface IFeaturesRepository {
  create: (data: ICreateFeatureDTO) => Promise<Feature>;
  list: () => Promise<Feature[] | undefined>;
  findById: (id: string) => Promise<Feature | undefined>;
  findByName: (name: string) => Promise<Feature | undefined>;
//   update: (id: string) => Promise<void>;
  // delete: (id: string) => Promise<void>;
}

export { IFeaturesRepository };
