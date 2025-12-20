function revealSantaRoute(routes: string[][]): string[] {
  let routeMap = new Map<string, string>();
  const newRoute = [...routes[0]];
  let lastPosition = routes[0][1];

  for (let i = 1; i < routes.length; i++) {
    routeMap.set(routes[i][0], routes[i][1]);
  }

  while (true) {
    const element = routeMap.get(lastPosition);
    if (!element) break;

    routeMap.delete(lastPosition);
    newRoute.push(element);
    lastPosition = element;
  }

  return newRoute;
}
