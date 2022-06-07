import { IUserDTO } from "src/modules/accounts/dtos/ICreateUser";
// import { User } from "src/modules/accounts/entities/User";
import { AppError } from "../../../../../shared/errors/AppError";
import { IUserRepository } from "../../../repository/ICreateUser";
import { UserModel } from "../schemas/User";

class UserRepository implements IUserRepository {
  async create(data: IUserDTO): Promise<void> {
    const user = new UserModel({ ...data });
    await user.save();
  }

  async findById(id: string): Promise<any | undefined> {
    const user = UserModel.findById({ _id: id });
    if (!user) {
      throw new AppError("User not found!");
    }

    return user;
  }

  async findByEmail(email: string): Promise<any | undefined> {
    const user = UserModel.findOne({ email: email });
    if (!user) {
      throw new AppError("User not found!");
    }
    return user;
  }
}

export { UserRepository };
