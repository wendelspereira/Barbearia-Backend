import { ICreateClientDTO } from "../../dtos/ICreateClientDTO"
import { Client } from "../../entities/Client"
import { ClientRepository } from "../../infra/repository/clientRepository"
import { AppError } from '../../../../shared/errors/AppError'

class CreateClientUseCase {
    async execute(data: ICreateClientDTO): Promise<Client>{
       const clientRepository = new ClientRepository()
        
        // const oldClient: Client = await clientRepository.findByPhoneNumber(data.phoneNumber)

        // const clientAlredyExists = oldClient.name === data.name && oldClient.phoneNumber === data.phoneNumber

        // if(clientAlredyExists){
        //     throw new AppError("Client alredy exists!")
        // }

       const client = await clientRepository.create({...data})
       
       return client
    }
}

export {CreateClientUseCase}