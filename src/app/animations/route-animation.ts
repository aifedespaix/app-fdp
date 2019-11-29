import {APP_ROUTES} from '../app-routing.module';

interface AnimationRoute {
  index: number;
  name: number;
}

interface StateChangeExpr {
  top: string;
  bottom: string;
}

export enum Direction {
  FROM= '=>',
  EACH= '<=>',
}

function work(worker: AnimationRoute[], routeId, result: string[], direction: Direction) {
  for (let i = routeId + 1; i < worker.length; i++) {
    result.push(getLink(worker[routeId], worker[i], direction));
    work(worker, i, result, direction);
  }
  return result;
}

function getLink(from: AnimationRoute, to: AnimationRoute, direction: Direction) {
  return `${from.name} ${direction} ${to.name}`;
}

export function getMainStateChangeExpr() {
  const routes = APP_ROUTES
    .map((r) => {
      return r.data && r.data.main ? {
        index: r.data.index,
        name: r.data.animation,
      } as AnimationRoute : false;
    })
    .filter(r => r)
    .sort((r: AnimationRoute, p: AnimationRoute) => r.index - p.index) as AnimationRoute[];
  return {
    top: work(routes, 0, [], Direction.FROM).join(', '),
    bottom: work(routes.reverse(), 0, [], Direction.FROM).join(', '),
  };
}
