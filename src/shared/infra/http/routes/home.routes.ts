import { Router } from "express";
import { UserRepository } from "../../../../modules/accounts/infra/mongoose/repository/UserRepository";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const homeRoutes = Router();

homeRoutes.get("/", ensureAuthenticated, async (req, res) => {
  const userRepository = new UserRepository();
  const { id } = req.user;
  const user = await userRepository.findById(id);
  res.json({ user: user });
});

export { homeRoutes };
