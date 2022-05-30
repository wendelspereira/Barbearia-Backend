import { ICreateOpenHoursDTO, IListOpenHoursDTO } from "../dtos/ICreateOpenHoursDTO"

interface IOpeningHoursRepository {
    create: (data: ICreateOpenHoursDTO) => Promise<void>
    list: () => Promise<IListOpenHoursDTO | undefined>
}

export {IOpeningHoursRepository}