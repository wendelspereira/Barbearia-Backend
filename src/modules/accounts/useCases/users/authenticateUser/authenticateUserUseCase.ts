import { IAuthRequest } from "../../../dtos/IAuthRequest";
import { UserRepository } from "../../../infra/mongoose/repository/UserRepository";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { AppError } from "../../../../../shared/errors/AppError";

interface ITokenResponse {
  user: {
    name: string;
    email: string;
  };
  token: string;
}

class AuthenticateUseCase {
  async execute({ email, password }: IAuthRequest) {
    const userRepository = new UserRepository();

    const user = await userRepository.checkPassword(email, password);

    const token = sign({}, "79dd89f39b52b083b7a801278d584872", {
      subject: user.id!.toString(),
      expiresIn: "30d",
    });

    const response: ITokenResponse = {
      user: {
        name: user.name,
        email,
      },
      token,
    };

    return response;
  }
}

export { AuthenticateUseCase };
