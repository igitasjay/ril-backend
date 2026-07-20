import { routes } from "../data/routes.data";
import { Route } from "../models/route.model";

function getAllRoutes(): Route[] {
  return routes;
}

export { getAllRoutes };
