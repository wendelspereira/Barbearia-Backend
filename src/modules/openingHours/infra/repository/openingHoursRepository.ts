import {getMongoManager} from "typeorm";
import { IOpeningHoursRepository } from "../../repository/IOpeningHoursRepository";


class OpeningHoursRepository implements IOpeningHoursRepository {
  

  async create(data: any): Promise<void> {
    const openingHours = new OpeningHoursRepository()
    
  }

  async list() {

    return 
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