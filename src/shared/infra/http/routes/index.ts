import express from "express";
import {schedulingRoutes } from "../routes/scheduling.routes"
import { accountRoutes } from "./accounts.routes";
import { featureRoutes } from "./features.routes";

const routes = express()

routes.use('/scheduling', schedulingRoutes)
routes.use('/users', accountRoutes)
routes.use('/features', featureRoutes)

export { routes };
