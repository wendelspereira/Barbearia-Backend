// import { ICreateClientDTO } from "../../../dtos/ICreateUser";
import {IClientRepository } from "../../../repository/ICreateUser";
import { Client } from "../schemas/Client";

class ClientRepository implements IClientRepository {

  // async create({ name, phoneNumber }: ICreateClientDTO): Promise<void> {
  //   // const client = this.repository.create({ name, phoneNumber });
  //   // await this.repository.save(client);
  // }

  // async findById(id: string): Promise<Client | undefined> {
  //   const client = await this.repository.findOne(id);
  //   return client;
  // }
}

export { ClientRepository };
