import { CreateDateColumn, Entity, PrimaryColumn } from "typeorm"

@Entity("schedulings")
class Scheduling {

    @PrimaryColumn()
    id?: string;

    


    @CreateDateColumn()
    created_at!: string;
}

export { Scheduling }