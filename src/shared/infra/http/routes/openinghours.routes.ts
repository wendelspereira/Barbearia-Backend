import {Router} from "express"
import { CreateOpeningHoursController } from "../../../../modules/openingHours/useCases/createOpeningHours/createOpeningHoursController";
import { ListOpeningHoursController } from "../../../../modules/openingHours/useCases/listOpeningHours/listOpeningHoursController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const openingHoursRoutes = Router();
const createOpeningHoursController = new CreateOpeningHoursController()
const listOpeningHoursController = new ListOpeningHoursController()

openingHoursRoutes.post("/", ensureAuthenticated, createOpeningHoursController.handle)
openingHoursRoutes.get("/", listOpeningHoursController.handle)

export { openingHoursRoutes };





