import { Client } from "../../entities/Client";
import { ClientRepository } from "../../infra/repository/clientRepository";
import { AppError } from "../../../../shared/errors/AppError";

class FindClientUseCase {
  async execute(id: string): Promise<Client> {
    const clientRepository = new ClientRepository();

    const client: Client = await clientRepository.findById(id);

    if (!client) {
      throw new AppError("Client alredy exists!");
    }
    return client;
  }
}

export { FindClientUseCase };
