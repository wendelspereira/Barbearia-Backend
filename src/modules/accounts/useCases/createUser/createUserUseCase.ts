import { UserRepository } from "../../infra/typeorm/repository/UserRepository";
import { hash } from "bcrypt";
import { IUserDTO } from "../../repository/IUser";

class CreateUserUseCase {
  async execute({ name, email, password }: IUserDTO) {
    const userRepository = new UserRepository();

    const passwordHash = await hash(password, 8);

    await userRepository.create({ name, email, password: passwordHash });
  }
}

export { CreateUserUseCase };
