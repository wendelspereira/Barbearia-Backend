import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidv4 } from "uuid";

@Entity("openinghours")
class OpeningHours {
  @PrimaryColumn()
  id!: string;

  @Column()
  openingHoursJSON!: string;

  @CreateDateColumn()
  created_at!: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export { OpeningHours };
