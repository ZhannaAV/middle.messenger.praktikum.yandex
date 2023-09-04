import { EventBus } from './eventBus';

export class Block<P extends Record<string, any> = any> {
  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render',
  } as const;

  private eventBus;

  protected props: P;

  _element: HTMLElement = null;

  /**
   * @param {Object} props
   *
   * @returns {void}
   */
  constructor(props = {}) {
    const eventBus = new EventBus();

    this.props = this._makePropsProxy(props as P);

    this.eventBus = () => eventBus;

    this._registerEvents(eventBus);

    eventBus.emit(Block.EVENTS.INIT);
  }

  private _registerEvents(eventBus: EventBus) {
    eventBus.on(Block.EVENTS.INIT, this._init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, (this._componentDidUpdate as () => void).bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  private _init() {
    this.init();
    this.eventBus()
      .emit(Block.EVENTS.FLOW_RENDER);
  }

  protected init() {
  }

  private _componentDidMount() {
    this.componentDidMount();
  }

  // Может переопределять пользователь, необязательно трогать
  componentDidMount() {
  }

  protected dispatchComponentDidMount() {
    this.eventBus()
      .emit(Block.EVENTS.FLOW_CDM);
  }

  private _componentDidUpdate(oldProps: unknown, newProps: unknown) {
    this._removeEvents();
    const response = this.componentDidUpdate(oldProps, newProps);
    if (response) {
      this.eventBus()
        .emit(Block.EVENTS.FLOW_RENDER);
    }
  }

  // Может переопределять пользователь, необязательно трогать
  protected componentDidUpdate(oldProps: unknown, newProps: unknown) {
    return true;
  }

  public setProps = (nextProps: Record<string, any>) => {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
  };

  get element() {
    return this._element;
  }

  private _addEvents() {
    const { events = {} } = this.props as P & { events: Record<string, () => void> };

    Object.keys(events)
      .forEach((eventName) => {
        this._element?.addEventListener(eventName, events[eventName]);
      });
  }

  private _removeEvents() {
    const { events = {} } = this.props as P & { events: Record<string, () => void> };

    Object.keys(events)
      .forEach((eventName) => {
        this._element?.removeEventListener(eventName, events[eventName]);
      });
  }

  private _render() {
    const el: unknown = this.render();
    if (this._element) this._element.replaceWith(el as HTMLElement);
    this._element = el as HTMLElement;
    this._addEvents();
  }

  // Может переопределять пользователь, необязательно трогать
  protected render() {
  }

  public getContent() {
    return this.element;
  }

  private _makePropsProxy(props: P) {
    const self = this;
    return new Proxy(props, {
      get(target: Record<string, any>, prop: string) {
        const value = target[prop];
        return typeof value === 'function' ? (value as () => void).bind(target) : value;
      },
      set(target: Record<string, any>, prop: string, value: unknown) {
        const oldTarget = { ...target };
        target[prop] = value;
        self.eventBus().emit(Block.EVENTS.FLOW_CDU, oldTarget, target);
        return true;
      },
      deleteProperty() {
        throw new Error('Нет доступа');
      },
    } as any);
  }

  public show() {
  }

  public hide() {
  }
}
