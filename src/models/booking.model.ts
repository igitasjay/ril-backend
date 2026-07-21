interface Booking {
  id: string;
  busId: string;
  routeId: string;
  seatNumbers: number[];
  passengerName: string;
  totalPrice: number;
  status: "pending" | "confirmed";
}

export { Booking };
