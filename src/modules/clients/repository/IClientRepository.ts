import { ICreateClientDTO } from "../dtos/ICreateClientDTO"
import { Client } from "../entities/Client"

interface IClientRepository {
    create: (data: ICreateClientDTO) => Promise<Client>;
    findById: (id: string) => Promise<Client | undefined>;
    find: () => Promise<Client[] | undefined>;
    findByPhoneNumber: (PhoneNumber: string) => Promise<Client | undefined>;
}

export {IClientRepository}