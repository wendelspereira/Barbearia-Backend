import { ICreateOpenHoursDTO } from "../../dtos/ICreateOpenHoursDTO";
import { OpeningHoursRepository } from "../../infra/repository/openingHoursRepository";

class CreateOpeningHoursUseCase {
  async execute(data: string) {
    const repository = new OpeningHoursRepository();
    // const openinghours = JSON.parse(data)
    await repository.create(data);
  }
}

export { CreateOpeningHoursUseCase };
