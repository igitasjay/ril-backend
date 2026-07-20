import express from "express";
import { getRoutes } from "../controllers/route.controller";

const routesrouter = express.Router();

routesrouter.get("/", getRoutes);

export { routesrouter };
