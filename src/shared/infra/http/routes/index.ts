import express from "express";
import { accountRoutes } from "../routes/accounts.routes";
import { homeRoutes } from "./home.routes";
// import { authenticateRoutes } from "./authencate.routes";
// import { schedulingRoutes } from "../routes/scheduling.routes";
// import { featureRoutes } from "./features.routes";
// import { openingHoursRoutes } from "./openinghours.routes";

const routes = express();

routes.use("/", homeRoutes);
routes.use("/users", accountRoutes);
// routes.use(authenticateRoutes);
// routes.use("/scheduling", schedulingRoutes);
// routes.use("/features", featureRoutes);
// routes.use("/openinghours", openingHoursRoutes);

export { routes };

