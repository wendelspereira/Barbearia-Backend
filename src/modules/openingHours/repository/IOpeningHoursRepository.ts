import { ICreateOpenHoursDTO, IListOpenHoursDTO } from "../dtos/ICreateOpenHoursDTO"

interface IOpeningHoursRepository {
    create: (data: any) => any
    list: () => any
}

export {IOpeningHoursRepository}