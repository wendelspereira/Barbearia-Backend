import { Column, CreateDateColumn, Entity, ObjectID, ObjectIdColumn } from "typeorm";

@Entity("features")
class Feature {
  @ObjectIdColumn()
  id?: ObjectID;

  @Column()
  name!: string;

  @Column()
  description!: string;

  @Column()
  price!: number;

  @Column()
  estimatedTime!: string;

  @Column()
  isAvailable!: boolean;
  
  @CreateDateColumn()
  created_at!: Date;
}

export { Feature };
