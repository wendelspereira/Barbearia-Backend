import { ICreateSchedulingDTO } from "../../dtos/ICreateScheduling";
import { SchedulingRepository } from "../../infra/repository/SchedulingRepository"
class CreateSchedulingUseCase {
    async execute({client, services, schedulingHours}: ICreateSchedulingDTO){
        const schedulingRepository = new SchedulingRepository()
        
        await schedulingRepository.create({client, services, schedulingHours})
    }
}

export { CreateSchedulingUseCase }