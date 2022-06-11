import { AppError } from "../../../../shared/errors/AppError";
import { ICreateClientDTO } from "../../dtos/ICreateClientDTO";
import { Client } from "../../entities/Client";
import { IClientRepository } from "../../repository/IClientRepository";
import { ClientModel } from "../schemas/ClientModel";

class ClientRepository implements IClientRepository {
  async create(data: ICreateClientDTO): Promise<Client> {
    const client = new ClientModel({ ...data });
    const result = await client.save();
    return result;
  }

  async findById(id: string): Promise<any | undefined> {
    const client = ClientModel.findById({ _id: id });
    if (!client) {
      throw new AppError("Client not found!");
    }
    return client;
  }

  async find(): Promise<Client[] | undefined> {
    const client = ClientModel.find();
    if (!client) {
      throw new AppError("Client not found!");
    }
    return client;
  }

  async findByPhoneNumber(phoneNumber: string): Promise<any | undefined> {
    const client = ClientModel.findById({phoneNumber: phoneNumber });
    if (!client) {
      throw new AppError("Client not found!");
    }
    return client;
  }
}

export { ClientRepository };
