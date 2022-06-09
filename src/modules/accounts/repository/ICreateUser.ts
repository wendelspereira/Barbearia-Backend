import { ICreateClientDTO } from "../dtos/ICreateClient";
import { ICreateUserDTO } from "../dtos/ICreateUser";
import { User } from '../entities/User'


interface IUserRepository {
  create: (data: ICreateUserDTO) => Promise<User>;
  findById: (id: string) => Promise<User | undefined>;
  findByEmail: (email: string) => Promise<User | undefined>;
  checkPassword: (email: string, password: string) => Promise<User | undefined>;
}

interface IClientRepository {
  // create: (data: ICreateClientDTO) => Promise<void>;
  // findById: (id: string) => Promise<Client | undefined>;
}

export { IUserRepository, IClientRepository};
