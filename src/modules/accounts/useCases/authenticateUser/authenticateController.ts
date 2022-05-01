import { Request, Response } from "express";
import { AuthenticateUseCase } from "./authenticateUseCase";

class AuthenticateController {
  async handle(request: Request, response: Response): Promise<Response>{
    const { email, password } = request.body;
    const authenticateUseCase = new AuthenticateUseCase();
    const result = await authenticateUseCase.execute({ email, password });
    
    return response.json(result);
  }
}

export { AuthenticateController };
