import express from "express";
import { homeRoutes } from "./home.routes";
import { accountRoutes } from "../routes/accounts.routes";
import { featureRoutes } from "./feature.routes";
import { schedulingRoutes } from "../routes/scheduling.routes";
// import { authenticateRoutes } from "./authencate.routes";
// import { openingHoursRoutes } from "./openinghours.routes";

const routes = express();

routes.use("/", homeRoutes);
routes.use("/users", accountRoutes);
routes.use("/features", featureRoutes);
routes.use("/scheduling", schedulingRoutes);
// routes.use(authenticateRoutes);
// routes.use("/openinghours", openingHoursRoutes);

export { routes };

