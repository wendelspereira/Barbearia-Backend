import { User } from "../infra/typeorm/entities/User.entity";

interface IUserDTO {
  name: string;
  email: string;
  password: string;
}

interface IUserRepository {
  create: (data: IUserDTO) => Promise<void>;
  findById: (id: string) => Promise<User | undefined>;
}

export { IUserRepository, IUserDTO };
