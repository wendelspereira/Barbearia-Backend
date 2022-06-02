import { Column, Entity, PrimaryColumn, CreateDateColumn, ObjectIdColumn } from "typeorm";
import { v4 as uuidv4 } from "uuid";

@Entity("client")
class Client {
  @ObjectIdColumn()
  id!: string;
  @Column()
  name!: string;
  @Column()
  phoneNumber!: string;
  @CreateDateColumn()
  created_at!: string;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export { Client };
