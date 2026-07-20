import { getAllBuses } from "../services/bus.service";
import { Request, Response } from "express";

function getBuses(req: Request, res: Response) {
  const buses = getAllBuses();
  res.json(buses);
}

export { getBuses };
