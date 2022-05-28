import { OpeningHoursRepository } from "../../infra/repository/openingHoursRepository";

class ListOpeningHoursUseCase {
  async execute(){
    const repository = new OpeningHoursRepository();
    const openingHours = await repository.list();

    return openingHours
  }
}

export { ListOpeningHoursUseCase };
