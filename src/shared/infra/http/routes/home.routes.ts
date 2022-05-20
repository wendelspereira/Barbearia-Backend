import {Router} from "express"

const homeRoutes = Router();

homeRoutes.get("/", (req, res) => res.json({response: "Welcome to Alves Wendel"}));

export { homeRoutes };