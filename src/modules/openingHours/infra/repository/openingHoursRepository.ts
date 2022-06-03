import { getMongoManager } from "typeorm";
import { ICreateOpenHoursDTO } from "../../dtos/ICreateOpenHoursDTO";
import { IOpeningHoursRepository } from "../../repository/IOpeningHoursRepository";
import { OpeningHours } from "../entities/OpeningHours.entity";
import { People } from "../entities/people.entity";

class OpeningHoursRepository implements IOpeningHoursRepository {
  async create(data: ICreateOpenHoursDTO[]): Promise<void> {
    const people = new People();
    people.name = 'wendel'
    people.idade = 1
    try {
      const manager = getMongoManager();
      await manager.save(people);
    } catch (err) {console.log(err)}
  }

  async list() {
    return;
  }
}

export { OpeningHoursRepository };

// const user = new User();
// user.firstName = "Timber";
// user.lastName = "Saw";
// user.profile = new Profile();
// user.profile.about = "About Trees and Me";
// user.profile.education = "Tree School";
// user.profile.career = "Lumberjack";
// user.photos = [
//     new Photo("me-and-trees.jpg", "Me and Trees", 100),
//     new Photo("me-and-chakram.jpg", "Me and Chakram", 200),
// ];

// const manager = getMongoManager();
// await manager.save(user);
