import { Column, CreateDateColumn, Entity, ObjectID, ObjectIdColumn } from "typeorm";
import { Client } from "../../../../accounts/infra/typeorm/entities/Client.entity";
import { Feature } from "../../../../features/infra/typeorm/entities/Feature.entity";

@Entity("schedulings")
class Scheduling {
  @ObjectIdColumn()
  id?: ObjectID;

  @Column()
  client!: Client;
  
  @Column()
  services!: Feature[];
  
  @Column()
  schedulingHours!: Scheduling[];

  @CreateDateColumn()
  created_at!: Date;

}

export { Scheduling };
