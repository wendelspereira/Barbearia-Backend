import { Column, Entity } from "typeorm";
import { DoW } from "./Dow.entity";

@Entity("openingHours")
class OpeningHours {
  @Column(type => DoW)
  dows!: DoW[];
}

export { OpeningHours };


