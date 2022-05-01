import { getRepository, Repository } from "typeorm";
import { IUserRepository, IUserDTO } from "../../../repository/IUser";
import { User } from "../entities/User";

class UserRepository implements IUserRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create({ name, email, password }: IUserDTO): Promise<void> {
    console.log(this.repository)
    const user = this.repository.create({ name, email, password });
    await this.repository.save(user);
  }

  async findByEmail(email: string): Promise<User | undefined> {
    const user = await this.repository.findOne({email});
    return user;
  }

  async findById(id: string): Promise<User | undefined> {
    const user = await this.repository.findOne(id);
    return user;
  }
}

export { UserRepository };
