import { Column, Entity, PrimaryColumn, CreateDateColumn } from "typeorm";
import { v4 as uuidv4 } from "uuid";

@Entity("users")
class User {
  @PrimaryColumn()
  id!: string;
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

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
      this.isAdmin = false;
    }
  }
}

export { User };
