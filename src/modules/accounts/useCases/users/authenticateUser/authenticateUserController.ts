import { Request, Response } from "express";
import { AuthenticateUseCase } from "./authenticateUserUseCase";

class AuthenticateUserController {
  async handle(request: Request, response: Response): Promise<Response>{
    const { email, password } = request.body;
    const authenticateUseCase = new AuthenticateUseCase();
    const result = await authenticateUseCase.execute({ email, password });
    
    return response.status(200).send(result);
  }
}

export { AuthenticateUserController };
