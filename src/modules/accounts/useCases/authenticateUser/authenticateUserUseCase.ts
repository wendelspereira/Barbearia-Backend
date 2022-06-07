import { IAuthRequest } from "../../dtos/IAuthRequest";
import { UserRepository } from "../../infra/mongoose/repository/UserRepository";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { AppError } from "../../../../shared/errors/AppError";
import { ObjectId } from 'mongodb';

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

    const user = await userRepository.findById(email);

    if (!user) {
      throw new AppError("User not found!");
    }
    console.log(user.accountData.password)
    const passwordMatch = await compare(password, user.accountData.password);

    if (!passwordMatch) {
      throw new AppError("Email or password is incorrect!", 401);
    }

    const token = sign({}, "79dd89f39b52b083b7a801278d584872", {
      subject: user.id?.toString(),
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
