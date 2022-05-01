import { ICreateSchedulingDTO } from "../dtos/ICreateScheduling";
import { Scheduling } from "../entities/Scheduling";

interface ISchedulingRepository {
  create: (data: ICreateSchedulingDTO) => Promise<void>;
  list: () => Promise<Scheduling[]>;
}

export { ISchedulingRepository };
