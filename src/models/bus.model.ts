interface Bus {
  id: string;
  plateNumber: string;
  routeId: string;
  totalSeats: number;
  seats: Seat[];
}

interface Seat {
  seatNumber: number;
  status: "available" | "booked";
}

export { Bus, Seat };
