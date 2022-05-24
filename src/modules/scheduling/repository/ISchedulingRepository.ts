import { ICreateSchedulingDTO } from "../dtos/ICreateScheduling";
import { Scheduling } from "../infra/typeorm/entities/Scheduling.entity";

interface ISchedulingRepository {
  create: (data: ICreateSchedulingDTO) => Promise<void>;
  list: () => Promise<Scheduling[]>;
}

export { ISchedulingRepository };
