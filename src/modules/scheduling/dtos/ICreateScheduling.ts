import { Client } from "../../clients/entities/Client";
import { Feature } from '../../features/entities/Feature'
interface ICreateSchedulingDTO {
  client: Client;
  services: Feature[];
  schedulingHours: string;
}

export { ICreateSchedulingDTO };
