import { expect } from 'chai';
import { Router } from './router';
import { EPathMap } from './model';
import { Block } from '../block';
import { templator } from '../templator';

describe('Router', () => {
  class Component extends Block {
    protected render() {
      return templator('<div>Not found</div>');
    }
  }

  document.body.innerHTML = '<div id="app"></div>';

  it('History is counting pushing of existing paths', () => {
    const router = new Router('#app');
    router.use('test1', Component).use('test2', Component);
    const start = router.getHistory().length;
    router.go('test1');
    router.go('test2');
    expect(router.getHistory().length)
      .to
      .eq(start + 2);
  });

  it('History is counting pushing of not found pages', () => {
    const router = new Router('#app');
    router.use(EPathMap.notFound, Component);
    const start = router.getHistory().length;
    router.go('test3');
    expect(router.getHistory().length)
      .to
      .eq(start + 2);
  });
});
