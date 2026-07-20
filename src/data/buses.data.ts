import { Bus, Seat } from "../models/bus.model";

const buses: Bus[] = [
  {
    id: "bus-1",
    plateNumber: "PHC123AP",
    routeId: "route-1",
    totalSeats: 18,
    seats: Array.from({ length: 18 }, (_, i) => ({
      seatNumber: i + 1,
      status: "available",
    })),
  },
  {
    id: "bus-2",
    plateNumber: "LOS456CV",
    routeId: "route-2",
    totalSeats: 18,
    seats: Array.from({ length: 18 }, (_, i) => ({
      seatNumber: i + 1,
      status: i % 2 === 0 ? "available" : "booked",
    })),
  },
  {
    id: "bus-3",
    plateNumber: "ABJ789TC",
    routeId: "route-3",
    totalSeats: 18,
    seats: Array.from({ length: 18 }, (_, i) => ({
      seatNumber: i + 1,
      status: "booked",
    })),
  },
  {
    id: "bus-4",
    plateNumber: "XTR000JP",
    routeId: "route-4",
    totalSeats: 18,
    seats: Array.from({ length: 18 }, (_, i) => ({
      seatNumber: i + 1,
      status: i % 2 !== 0 ? "available" : "booked",
    })),
  },
];

export { buses };
