import { Router } from "express";
import { AuthenticateController } from "../../../../modules/accounts/useCases/authenticateUser/authenticateController";
import { CreateUserController } from "../../../../modules/accounts/useCases/createUser/createUserController";

const accountRoutes = Router();

const createUserController = new CreateUserController();
const authenticateController = new AuthenticateController();

accountRoutes.post("/", createUserController.handle);
accountRoutes.post("/auth", authenticateController.handle);

export { accountRoutes };
