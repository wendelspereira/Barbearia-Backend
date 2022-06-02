import { Column, Entity, PrimaryColumn } from "typeorm";
import { Hours } from "./Hours.entity";

@Entity("dow")
class DoW {
  @Column(type => Hours)
  hours!: Hours[]
}

export { DoW };

