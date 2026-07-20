import { getAvailability } from "../services/availability.service";
import { Request, Response } from "express";

function getAvailabileRoutes(req: Request, res: Response) {
  const { from, to } = req.query;
  if (!from || !to) {
    res.status(400).json({
      error: "BadRequest",
    });

    return;
  }

  const availableroutes = getAvailability(from as string, to as string);
  return res.json({ availableroutes });
}

export { getAvailabileRoutes };
