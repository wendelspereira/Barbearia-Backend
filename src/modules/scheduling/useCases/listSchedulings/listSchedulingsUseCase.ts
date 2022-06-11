import { Scheduling } from "../../entities/Scheduling";
import { SchedulingRepository } from "../../infra/repository/SchedulingRepository";

class ListSchedulingsUseCase {
  async execute(): Promise<Scheduling[] | undefined> {
    const schedulingRepository = new SchedulingRepository();
    const schedulings = schedulingRepository.list();
    return schedulings;
  }
}

export { ListSchedulingsUseCase };
