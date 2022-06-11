import { Router } from "express";
import { CreateFeatureController } from "../../../../modules/features/useCases/createFeatures/createFeatureController";
import { ListFeaturesController } from "../../../../modules/features/useCases/listFeatures/listFeaturesController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const featureRoutes = Router();

const createFeatureController = new CreateFeatureController();
const listFeatureController = new ListFeaturesController();
featureRoutes.post("/", ensureAuthenticated, createFeatureController.handle);
featureRoutes.get("/", listFeatureController.handle);

export { featureRoutes };
