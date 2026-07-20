import { Route } from "../models/route.model";

const routes: Route[] = [
  {
    id: "route-1",
    from: "Port Harcourt",
    to: "Lagos",
    basePrice: 25000,
  },
  {
    id: "route-2",
    from: "Lagos",
    to: "Abuja",
    basePrice: 35000,
  },
  {
    id: "route-3",
    from: "Abuja",
    to: "Port Harcourt",
    basePrice: 45000,
  },
  {
    id: "route-4",
    from: "Abuja",
    to: "Lagos",
    basePrice: 55000,
  },
];

export { routes };
