import { ICreateOpenHoursDTO } from "../../dtos/ICreateOpenHoursDTO";
import { OpeningHoursRepository } from "../../infra/repository/openingHoursRepository";

class CreateOpeningHoursUseCase {
  async execute(data: ICreateOpenHoursDTO[]) {
    const repository = new OpeningHoursRepository();
    await repository.create(data);
  }
}

export { CreateOpeningHoursUseCase };
