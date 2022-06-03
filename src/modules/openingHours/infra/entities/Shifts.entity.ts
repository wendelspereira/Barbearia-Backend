import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("shifts")
class Shifts {
  @PrimaryColumn()
  opening!: string
  @Column()
  closure!: string
}

export { Shifts };