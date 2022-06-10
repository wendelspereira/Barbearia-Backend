import { Client } from "../../clients/entities/Client";

interface ICreateSchedulingDTO {
  client: Client;
  services: Feature[];
  schedulingHours: string;
}

export { ICreateSchedulingDTO, IServiceDTO, IClient };
