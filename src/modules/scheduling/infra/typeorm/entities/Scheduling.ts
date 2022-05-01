import { IClient, IServiceDTO } from "../../../dtos/ICreateScheduling";
import { v4 as uuidv4 } from "uuid";
import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

@Entity("schedulings")
class Scheduling {
  @PrimaryColumn()
  id?: string;

  @Column()
  client!: IClient;
  
  @Column()
  services!: IServiceDTO[];
  
  @Column()
  schedulingHours!: string;

  @CreateDateColumn()
  created_at!: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
    this.client.isWhatsapp = true;
  }
}

export { Scheduling };
