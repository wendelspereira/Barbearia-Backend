import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("openinghours")
class OpeningHours {
  @PrimaryColumn()
  openingHoursJSON!: string;
}

export { OpeningHours };
