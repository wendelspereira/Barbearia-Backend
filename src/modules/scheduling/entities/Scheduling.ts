import { Client } from "../../clients/entities/Client";
import { Feature } from "../../features/entities/Feature";

class Scheduling {
  client!: Client;
  services!: Feature[];
  schedulingHours!: string;
}

export { Scheduling };
