import { Block } from './block';

export const templator = (tmpl: string, children?: Record<string, Block | Block[]> | undefined): HTMLElement => {
  const fragment = document.createElement('div');
  fragment.innerHTML = tmpl;
  if (children) {
    Object.entries(children)
      .forEach(([titleComponent, component]) => {
        const el = fragment.querySelector(`[data-${titleComponent}]`) as Element;
        if (Array.isArray(component)) {
          component.forEach((comp) => el.before(comp.getContent()));
          el.remove();
        } else {
          el.replaceWith(component.getContent() as Node);
        }
      });
  }
  return fragment.firstElementChild as HTMLElement;
};
