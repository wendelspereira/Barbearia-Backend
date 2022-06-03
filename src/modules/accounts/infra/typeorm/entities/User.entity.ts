import { Column, Entity, CreateDateColumn, ObjectIdColumn, ObjectID } from "typeorm";

@Entity("users")
class User {
  @ObjectIdColumn()
  id?: ObjectID;
  @Column()
  name!: string;
  @Column()
  email!: string;
  @Column()
  password!: string;
  @Column()
  isAdmin!: boolean;
  @CreateDateColumn()
  created_at!: string;
}

export { User };
