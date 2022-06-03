import { Column, Entity } from "typeorm";
import { Shifts } from "./Shifts.entity";

@Entity("dow")
class DoW {
  @Column()
  dow!: "sunday"  | "monday"  | "tuesday"  | "wednesday"  | "thursday"  | "friday"  | "satuday";
  @Column(type => Shifts)
  hours!: Shifts[]
}

export { DoW };

