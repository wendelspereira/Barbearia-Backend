import { Column, Entity, PrimaryColumn } from "typeorm";
import { Shifts } from "./Shifts.entity";

@Entity("hours")
class Hours {
  @Column(type => Shifts)
  hours!: Shifts[]
}

export { Hours };



