import { BlockConstructable, ERoute, Route } from './route';
import { EPathMap } from './model';

export class Router {
  // eslint-disable-next-line no-use-before-define
  private static _instance: Router;

  private _routes: Route[] = [];

  private _currentRoute: any | null = null;

  private _history = window.history;

  private readonly _rootQuery: string = '';

  constructor(rootQuery: string) {
    if (Router._instance) {
      // eslint-disable-next-line no-constructor-return
      return Router._instance;
    }
    Router._instance = this;
    this._rootQuery = rootQuery;
  }

  public use(path: string, block: BlockConstructable, isProtected: ERoute = ERoute.unProtected) {
    const route = new Route(path, block, this._rootQuery, isProtected);
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
      return this.go(EPathMap.notFound);
    }

    if (route.isProtected && localStorage.getItem('auth') === 'false') {
      return this.go(EPathMap.signin);
    }

    if ((path === EPathMap.signin || path === EPathMap.signup) && localStorage.getItem('auth') === 'true') {
      return this.go(EPathMap.chats);
    }

    if (this._currentRoute) {
      this._currentRoute.leave();
    }

    this._currentRoute = route;
    return route.render();
  }

  public go(path: string) {
    this._history.pushState({}, '', path);
    this._onRoute(path);
  }

  private _getRoute(path: string) {
    return this._routes.find((route) => route.match(path));
  }

  public getHistory() {
    return this._history;
  }
}

export const router = new Router('#app');
