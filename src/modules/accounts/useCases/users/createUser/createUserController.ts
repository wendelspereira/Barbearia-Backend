import { Request, Response } from "express";
import { CreateUserUseCase } from "./createUserUseCase";
import { IUserDTO } from '../../../dtos/ICreateUser';

class CreateUserController {
  async handle(request: Request, response: Response) {
    const data: IUserDTO = request.body;
    const createUserUseCase = new CreateUserUseCase();
    const result = await createUserUseCase.execute(data);
    return response.status(200).send(result);
  }
}

export { CreateUserController };
