import express from "express";
import { checkBooking } from "../controllers/booking.controller";
const confirmrouter = express.Router();

confirmrouter.post("/", checkBooking);

export { confirmrouter };
