import { Client } from "../../entities/Client";
import { ClientRepository } from "../../infra/repository/clientRepository";
import { AppError } from "../../../../shared/errors/AppError";

class ListClientUseCase {
  async execute(): Promise<Client[]> {
    const clientRepository = new ClientRepository();

    const clients = await clientRepository.find();

    if (!clients) {
      throw new AppError("No client found!");
    }

    return clients;
  }
} 

export { ListClientUseCase };
