import { ICreateSchedulingDTO } from "../dtos/ICreateScheduling";
import { Scheduling } from "../entities/Scheduling";

interface ISchedulingRepository {
  create: (data: ICreateSchedulingDTO) => Promise<Scheduling>;
  list: () => Promise<Scheduling[] | undefined>;
}

export { ISchedulingRepository };
  