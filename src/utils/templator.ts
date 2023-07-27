export const templator = (tmpl, children = null): Node => {
  const fragment = document.createElement('div');
  fragment.innerHTML = tmpl;
  if (children) {
    Object.entries(children)
      .forEach(([titleComponent, component]) => {
        const el = fragment.querySelector(`[data-${titleComponent}]`);
        if (Array.isArray(component)) {
          component.reverse().forEach((comp) => el.after(comp));
          el.remove();
        } else {
          console.log(component);
          el.replaceWith(component as Node);
        }
      });
  }
  return fragment.firstElementChild;
};
