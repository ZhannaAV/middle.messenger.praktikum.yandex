import { Block } from '../block';

export interface BlockConstructable<P = any> {
  new(props: P): Block<P>;
}

function render(query: string, block: Block) {
  const root = document.querySelector(query);
  if (root) root.replaceWith(block.getContent());
  return root;
}

export enum ERoute {
  protected = 1,
  unProtected = 0
}

export class Route {
  private _block: Block | null = null;

  private readonly _path: string;

  private readonly _blockClass: BlockConstructable;

  private readonly _rootQuery: string;

  public readonly isProtected: ERoute;

  constructor(path: string, Class: BlockConstructable, rootQuery: string, isProtected: ERoute) {
    this._path = path;
    this._blockClass = Class;
    this._rootQuery = rootQuery;
    this.isProtected = isProtected;
  }

  public match(path: string) {
    return path === this._path;
  }

  leave() {
    if (this._block) {
      this._block = null;
    }
  }

  render() {
    if (!this._block) {
      this._block = new this._blockClass({});
      render(this._rootQuery, this._block);
    } else {
      this._block.show();
    }
  }
}
