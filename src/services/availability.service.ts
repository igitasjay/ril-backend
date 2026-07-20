import { routes } from "../data/routes.data";
import { buses } from "../data/buses.data";

function getAvailability(from: string, to: string) {
  const matchingroutes = routes.filter(
    (route) =>
      from.toLowerCase() === route.from.toLowerCase() &&
      to.toLowerCase() === route.to.toLowerCase(),
  );

  return matchingroutes.flatMap((route) =>
    buses.filter((bus) => bus.routeId === route.id),
  );
}

export { getAvailability };
