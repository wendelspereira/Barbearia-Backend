import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("shifts")
class Shifts {
  @Column()
  opening!: string
  @Column()
  closure!: string
}

export { Shifts };