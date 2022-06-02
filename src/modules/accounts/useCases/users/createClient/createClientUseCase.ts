import { ICreateClientDTO } from "src/modules/accounts/dtos/IClient"
import {ClientRepository} from "../../../infra/typeorm/repository/ClientRepository"

class CreateClientUseCase {
    async execute({name, phoneNumber}: ICreateClientDTO){
        const clientRepository = new ClientRepository()
        await clientRepository.create({name, phoneNumber})
    }
}

export {CreateClientUseCase}