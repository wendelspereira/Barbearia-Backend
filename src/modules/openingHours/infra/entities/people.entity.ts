import { Column, Entity, ObjectID, ObjectIdColumn, PrimaryColumn } from "typeorm";

@Entity("people")
class People {
  @ObjectIdColumn()
  id!: ObjectID
  @Column()
  name!: string
  @Column()
  idade!: number
}

export { People };
