import { IClient, IServiceDTO } from "../dtos/ICreateScheduling";
import { v4 as uuidv4 } from "uuid";

class Scheduling {
  id?: string;
  client!: IClient;
  services!: IServiceDTO[];
  schedulingHours!: string;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
    this.client.isWhatsapp = true;
  }
}

export { Scheduling };
