import { IAuthRequest } from "../../dtos/IAuthRequest";
import { UserRepository } from "../../infra/typeorm/repository/UserRepository";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

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

    const user = await userRepository.findByEmail(email);

    if (!user) {
      throw new Error("User not found!");
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error("Email or password is incorrect!");
    }

    const token = sign({}, "79dd89f39b52b083b7a801278d584872", {
      subject: user.id,
      expiresIn: "1d",
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
