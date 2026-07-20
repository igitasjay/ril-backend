import express from "express";
import { getAvailabileRoutes } from "../controllers/availability.controller";

const avrouter = express.Router();

avrouter.get("/", getAvailabileRoutes);

export { avrouter };
