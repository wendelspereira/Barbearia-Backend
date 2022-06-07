import { UserRepository } from "../../../../accounts/infra/mongoose/repository/UserRepository";
import { hash } from "bcrypt";
import { IUserDTO } from "src/modules/accounts/dtos/ICreateUser";

class CreateUserUseCase {
  async execute(data: IUserDTO) {
    const userRepository = new UserRepository();
    const { password } = data.accountData;
    const passwordHash = await hash(String(password), 8);
    data.accountData.password = passwordHash
    await userRepository.create(data);
  }
}

export { CreateUserUseCase };
