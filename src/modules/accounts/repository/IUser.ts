import { ICreateClientDTO } from "../dtos/IClient";
import { IUserDTO } from "../dtos/IUser";
import { Client } from "../infra/typeorm/entities/Client.entity";
import { User } from "../infra/typeorm/entities/User.entity";



interface IUserRepository {
  create: (data: IUserDTO) => Promise<void>;
  findById: (id: string) => Promise<User | undefined>;
}
interface IClientRepository {
  create: (data: ICreateClientDTO) => Promise<void>;
  findById: (id: string) => Promise<Client | undefined>;
}

export { IUserRepository, IClientRepository};
