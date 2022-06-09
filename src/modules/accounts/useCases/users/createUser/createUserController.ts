import { Request, Response } from "express";
import { CreateUserUseCase } from "./createUserUseCase";
import { ICreateUserDTO } from '../../../dtos/ICreateUser';

class CreateUserController {
  async handle(request: Request, response: Response) {
    const data: ICreateUserDTO = request.body;
    const createUserUseCase = new CreateUserUseCase();
    const result = await createUserUseCase.execute(data);
    return response.status(200).send(result);
  }
}

export { CreateUserController };
