import express from "express";
import { schedulingRoutes } from "../routes/scheduling.routes";
import { accountRoutes } from "./accounts.routes";
import { featureRoutes } from "./features.routes";
import { homeRoutes } from "./home.routes";
import { openingHoursRoutes } from "./openinghours.routes";

const routes = express();

routes.use("/", homeRoutes);
routes.use("/scheduling", schedulingRoutes);
routes.use("/users", accountRoutes);
routes.use("/features", featureRoutes);
routes.use("/openinghours", openingHoursRoutes);

export { routes };
