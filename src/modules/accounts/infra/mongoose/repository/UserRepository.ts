import { ICreateUserDTO } from "../../../dtos/ICreateUser";
import { AppError } from "../../../../../shared/errors/AppError";
import { IUserRepository } from "../../../repository/ICreateUser";
import { UserModel } from "../schemas/User";
import { User } from "../../../entities/User";
import { compare } from "bcrypt";

class UserRepository implements IUserRepository {
  async create(data: ICreateUserDTO): Promise<User> {
    const user = new UserModel({ ...data });
    const result = await user.save();
    return result;
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

  async checkPassword(email: string, password: string): Promise<User> {
    const user = await UserModel.findOne({ email: email }).select([
      "name",
      "password",
    ]);

    if (!user) {
      throw new AppError("User doesn`t exists!");
    }

    const passwordMatch = await compare(password, user.password);
    user.password = undefined;
    
    if (!passwordMatch) {
      throw new AppError("Email or password is incorrect!", 401);
    }

    return user;
  }
}

export { UserRepository };
