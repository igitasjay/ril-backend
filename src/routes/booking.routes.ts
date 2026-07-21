import express from "express";
import { bookSeat } from "../controllers/booking.controller";

const bookingrouter = express.Router();

bookingrouter.post("/", bookSeat);

export { bookingrouter };
