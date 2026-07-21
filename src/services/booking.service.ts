import { bookings } from "../data/bookings.data";
import { Booking } from "../models/booking.model";
import { getAllBuses } from "./bus.service";

let bookingCount: number = 1;

function createBooking(
  busId: string,
  routeId: string,
  seatNumbers: number[],
  passengerName: string,
  totalPrice: number,
) {
  const buses = getAllBuses();
  const targetBus = buses.find((bus) => bus.id === busId);
  if (!targetBus) {
    throw new Error("NotFoundException");
  }

  seatNumbers.every((seatNumber) => {
    const seat = targetBus.seats.find(
      (s) => s.seatNumber === seatNumber && s.status === "available",
    );
    if (!seat) {
      throw new Error("SeatUnavailableException");
    }
    return true;
  });

  seatNumbers.forEach((seatNumber) => {
    const seat = targetBus.seats.find((s) => s.seatNumber === seatNumber);
    if (seat) {
      seat.status = "booked";
    }
  });

  const booking: Booking = {
    id: `Booking-${bookingCount++}`,
    busId,
    routeId,
    seatNumbers,
    passengerName,
    totalPrice,
    status: "pending",
  };

  bookings.push(booking);
  return booking;
}

function confirmBooking(bookingId: string) {
  const booking = bookings.find((b) => bookingId === b.id);

  if (!booking) {
    throw new Error("NotFoundException");
  }

  if (booking.status === "confirmed") {
    throw new Error("AlreadyConfirmedException");
  }

  booking.status = "confirmed";

  return booking;
}

export { createBooking, confirmBooking };
