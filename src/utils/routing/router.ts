import { BlockConstructable, Route } from './route';

class Router {
  // eslint-disable-next-line no-use-before-define
  private static _instance: Router;

  private _routes: Route[] = [];

  private _currentRoute: any | null = null;

  private _history = window.history;

  private readonly _rootQuery: string;

  constructor(rootQuery: string) {
    if (Router._instance) {
      // eslint-disable-next-line no-constructor-return
      return Router._instance;
    }
    Router._instance = this;
    this._rootQuery = rootQuery;
  }

  public use(path: string, block: BlockConstructable) {
    const route = new Route(path, block, this._rootQuery);
    this._routes.push(route);
    return this;
  }

  public start() {
    window.onpopstate = (event: PopStateEvent) => {
      const target = event.currentTarget as Window;
      this._onRoute(target.location.pathname);
    };

    this._onRoute(window.location.pathname);
  }

  private _onRoute(path: string) {
    const route = this._getRoute(path);
    if (!route) {
      return;
    }

    if (this._currentRoute) {
      this._currentRoute.leave();
    }

    this._currentRoute = route;
    route.render();
  }

  public go(path: string) {
    this._history.pushState({}, '', path);
    this._onRoute(path);
  }

  private _getRoute(path: string) {
    return this._routes.find((route) => route.match(path));
  }

  public back() {
    window.history.back();
  }

  public forward() {
    window.history.forward();
  }
}

export const router = new Router('#app');
