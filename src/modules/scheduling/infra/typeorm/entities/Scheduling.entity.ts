import { v4 as uuidv4 } from "uuid";
import { Column, CreateDateColumn, Entity, ObjectIdColumn } from "typeorm";
import { Client } from "src/modules/accounts/infra/typeorm/entities/Client.entity";
import { Feature } from "src/modules/features/infra/typeorm/entities/Feature.entity";

@Entity("schedulings")
class Scheduling {
  @ObjectIdColumn()
  id?: string;

  @Column()
  client!: Client;
  
  @Column()
  services!: Feature[];
  
  @Column()
  schedulingHours!: Scheduling[];

  @CreateDateColumn()
  created_at!: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export { Scheduling };
