import { UserRepository } from "../../../../accounts/infra/mongoose/repository/UserRepository";
import { ICreateUserDTO } from "../../../dtos/ICreateUser";
import { User } from "../../../entities/User";
import { AppError } from "../../../../../shared/errors/AppError";

class CreateUserUseCase {
  async execute(data: ICreateUserDTO): Promise<User> {
    const userRepository = new UserRepository();
    const { email } = data;
    const userAlreadyExists = await userRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new AppError("User already exists");
    }

    const result = await userRepository.create(data);
    result.password = undefined;
    return result;
  }
}

export { CreateUserUseCase };
