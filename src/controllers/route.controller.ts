import { getAllRoutes } from "../services/route.service";
import { Request, Response } from "express";

function getRoutes(req: Request, res: Response) {
  const routes = getAllRoutes();
  res.json(routes);
}

export { getRoutes };
