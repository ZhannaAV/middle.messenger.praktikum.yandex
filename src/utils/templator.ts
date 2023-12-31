import { Block } from './block';

export const templator = (tmpl: string, children: Record<string, Block | Block[]> = null): HTMLElement => {
  const fragment = document.createElement('div');
  fragment.innerHTML = tmpl;
  if (children) {
    Object.entries(children)
      .forEach(([titleComponent, component]) => {
        const el = fragment.querySelector(`[data-${titleComponent}]`);
        if (Array.isArray(component)) {
          component.reverse().forEach((comp) => el.after(comp.getContent()));
          el.remove();
        } else {
          el.replaceWith(component.getContent() as Node);
        }
      });
  }
  return fragment.firstElementChild as HTMLElement;
};
