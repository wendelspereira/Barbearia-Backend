import {Router} from "express"
import { CreateSchedulingController } from "../../../../modules/scheduling/useCases/createScheduling/createSchedulingController";
import { ListSchedulingsController } from "../../../../modules/scheduling/useCases/listSchedulings/listSchedulingsController";

const schedulingRoutes = Router();
const createSchedulingController = new CreateSchedulingController()
const listSchedulingController = new ListSchedulingsController()

schedulingRoutes.post("/", createSchedulingController.handle);
schedulingRoutes.get("/", listSchedulingController.handle);

export { schedulingRoutes };
