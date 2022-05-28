import { ICreateOpenHoursDTO } from "../../dtos/ICreateOpenHoursDTO";
import { IOpeningHoursRepository } from "../../repository/IOpeningHoursRepository";
import { OpeningHours } from "../entities/OpeningHours.entity";
import { getRepository, Repository } from 'typeorm';



class OpeningHoursRepository implements IOpeningHoursRepository{

    private repository: Repository<OpeningHours>
    constructor(){
        this.repository = getRepository(OpeningHours)
    }
    
    async create(data: string): Promise<void>{
        const openingHoursJSON = data
        const openingHours = this.repository.create({openingHoursJSON})
        await this.repository.save(openingHours)
    }
    
    async list(): Promise<OpeningHours | undefined>{
        const openingHoursJSON = await this.repository.findOne()
        // const openingHours = await JSON.parse(openingHoursJSON)
        return openingHoursJSON
    }
}

export {OpeningHoursRepository}