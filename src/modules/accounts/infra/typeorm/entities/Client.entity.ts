import { Column, Entity, CreateDateColumn, ObjectID, ObjectIdColumn } from "typeorm";

@Entity("client")
class Client {
  @ObjectIdColumn()
  id?: ObjectID;
  @Column()
  name!: string;
  @Column()
  phoneNumber!: string;
  @CreateDateColumn()
  created_at!: string;
}

export { Client };
