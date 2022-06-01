import { Request, Response } from "express";
import { AuthenticateUseCase } from "./authenticateUserUseCase";

class AuthenticateUserController {
  async handle(request: Request, response: Response): Promise<Response>{
console.log(request.body)

    const { email, password } = request.body;
    const authenticateUseCase = new AuthenticateUseCase();
    const result = await authenticateUseCase.execute({ email, password });
    
    return response.json(result);
  }
}

export { AuthenticateUserController };
