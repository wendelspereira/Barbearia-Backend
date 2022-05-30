import {
  ICreateOpenHoursDTO,
  IListOpenHoursDTO,
} from "../../dtos/ICreateOpenHoursDTO";
import { IOpeningHoursRepository } from "../../repository/IOpeningHoursRepository";
import { OpeningHours } from "../entities/OpeningHours.entity";
import { getRepository, Repository } from "typeorm";
import { AppError } from "../../../../shared/errors/AppError";

class OpeningHoursRepository implements IOpeningHoursRepository {
  private repository: Repository<OpeningHours>;
  constructor() {
    this.repository = getRepository(OpeningHours);
  }

  async create(data: ICreateOpenHoursDTO): Promise<void> {
    const oldOpeningHours = await this.list()
    if(oldOpeningHours){
      await this.repository
        .createQueryBuilder()
        .delete()
        .from(OpeningHours)
        .execute()
    }
    const openingHoursJSON = JSON.stringify(data);
    const openingHours = this.repository.create({ openingHoursJSON });
    await this.repository.save(openingHours);
  }

  async list(): Promise<IListOpenHoursDTO | undefined> {
    const find = await this.repository.findOne();
    if (!find) {
      return;
    }

    return JSON.parse(find.openingHoursJSON);
  }
}

export { OpeningHoursRepository };
