import express from "express";
import { getBuses } from "../controllers/bus.controller";

const busrouters = express.Router();

busrouters.get("/", getBuses);

export { busrouters };
