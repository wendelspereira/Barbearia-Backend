import { ICreateOpenHoursDTO } from "../dtos/ICreateOpenHoursDTO"
import { OpeningHours } from "../infra/entities/OpeningHours.entity"

interface IOpeningHoursRepository {
    create: (data: string) => Promise<void>
    list: () => Promise<OpeningHours | undefined>
}

export {IOpeningHoursRepository}