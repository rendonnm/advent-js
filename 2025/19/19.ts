function revealSantaRoute(routes: string[][]): string[] {
  let routeCopy = [...routes];
  const newRoute = [...routes[0]];

  let lastPosition = routes[0][1];
  while (true) {
    const element = routeCopy.find((el) => el[0] === lastPosition);
    if (!element) break;

    newRoute.push(element[1]);
    lastPosition = element[1];

    const i = routeCopy.indexOf(element);
    routeCopy = [...routeCopy.slice(0, i), ...routeCopy.slice(i + 1)];
  }

  return newRoute;
}
