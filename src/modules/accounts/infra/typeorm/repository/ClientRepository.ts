import { ICreateClientDTO } from "src/modules/accounts/dtos/IClient";
import { getRepository, Repository } from "typeorm";
import {IClientRepository } from "../../../repository/IUser";
import { Client } from "../entities/Client.entity";

class ClientRepository implements IClientRepository {
  private repository: Repository<Client>;

  constructor() {
    this.repository = getRepository(Client);
  }

  async create({ name, phoneNumber }: ICreateClientDTO): Promise<void> {
    const client = this.repository.create({ name, phoneNumber });
    await this.repository.save(client);
  }

  async findById(id: string): Promise<Client | undefined> {
    const client = await this.repository.findOne(id);
    return client;
  }
}

export { ClientRepository };
