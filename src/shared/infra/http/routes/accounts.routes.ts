import { Router } from "express";
import { AuthenticateUserController } from "../../../../modules/accounts/useCases/authenticateUser/authenticateUserController";
import { CreateUserController } from "../../../../modules/accounts/useCases/createUser/createUserController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const accountRoutes = Router();

const createUserController = new CreateUserController();
const authenticateController = new AuthenticateUserController();

accountRoutes.post("/", ensureAuthenticated, createUserController.handle);
accountRoutes.post("/auth", authenticateController.handle);
accountRoutes.get("/auth", (request,response)=>response.send('Teste'));

export { accountRoutes };
