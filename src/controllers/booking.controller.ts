import { createBooking } from "../services/booking.service";
import { Request, Response } from "express";

function bookSeat(req: Request, res: Response) {
  const { busId, routeId, seatNumbers, passengerName, totalPrice } = req.body;

  if (!busId || !routeId || !seatNumbers || !passengerName || !totalPrice) {
    res.status(400).json({ error: "BadRequest" });
    return;
  }

  try {
    const newbooking = createBooking(
      busId,
      routeId,
      seatNumbers,
      passengerName,
      totalPrice,
    );

    res.send({
      status: "success",
      data: newbooking,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    res.status(409).json({ status: "error", error: message });
  }
}

export { bookSeat };
