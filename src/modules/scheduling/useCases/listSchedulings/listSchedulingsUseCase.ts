import { Scheduling } from "../../infra/typeorm/entities/Scheduling.entity";
import { SchedulingRepository } from "../../infra/typeorm/repository/SchedulingRepository";

class ListSchedulingsUseCase {
  async execute(): Promise<Scheduling[]> {
    const schedulingRepository = new SchedulingRepository();
    const schedulings = schedulingRepository.list();
    return schedulings;
  }
}

export { ListSchedulingsUseCase };
