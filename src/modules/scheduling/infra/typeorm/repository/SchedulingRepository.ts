import { ICreateSchedulingDTO } from "../../../dtos/ICreateScheduling";
import { Scheduling } from "../../../entities/Scheduling";
import { ISchedulingRepository } from "../../../repository/ISchedulingRepository";

class SchedulingRepository implements ISchedulingRepository {
  schedulings: any;

  async create({client, services, schedulingHours}: ICreateSchedulingDTO): Promise<void> {
    
    const scheduling = {
        client, 
        services, 
        schedulingHours, 
    }

    await this.schedulings.push(scheduling)


  }

  async list(): Promise<Scheduling[]> {
    return this.schedulings;
  }
}

export { SchedulingRepository };
