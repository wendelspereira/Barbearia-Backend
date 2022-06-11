import { ICreateSchedulingDTO } from "../../dtos/ICreateScheduling";
import { Scheduling } from "../../entities/Scheduling";
import { ISchedulingRepository } from "../../repository/ISchedulingRepository";
import { SchedulingModel } from "../Schemas/Scheduling";


class SchedulingRepository implements ISchedulingRepository {
  async create(data: ICreateSchedulingDTO): Promise<Scheduling> {
    const feature = new SchedulingModel({ ...data });
    const result = await feature.save();
    return result;
  }

  async list(): Promise<Scheduling[] | undefined> {
    const features = await SchedulingModel.find();
    return features;
  }

  // async findById(id: string): Promise<Scheduling | undefined> {
  //   const feature = await SchedulingModel.findById({ id: id });
  //   return feature;
  // }

  // async findByName(name: string): Promise<Scheduling | undefined> {
  //   const feature = await SchedulingModel.findById({ name: name });
  //   return feature;
  // }
}

export { SchedulingRepository };
