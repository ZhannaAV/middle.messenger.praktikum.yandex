import sinon from 'sinon';
import { Block } from './block';
import { expect } from 'chai';

interface Props {
  text?: string;
}

describe('Block', () => {
  let ComponentClass: typeof Block<Props>;
  const id = 'test';

  before(() => {
    class Component extends Block<Props> {
      constructor(props: Props) {
        super({ ...props });
      }

      protected render() {

        return `
          <div>
            <span id=${id}>${this.props.text}</span>
            <button></button>
          </div>`;
      }
    }

    ComponentClass = Component;
  });

  it('Создаётся компонент с переданными пропсами', () => {
    const text = 'Hello';
    const newComponent = new ComponentClass({ text });

    const element = newComponent.getContent();
    global.document.body.innerHTML = element as string;
    const spanText = global.document.querySelector(`#${id}`);

    expect(spanText)
      .to
      .eq(text);
  });

  // it('Реактивность на смену пропсов', () => {
  //   const text = 'new test';
  //   const newComponent = new ComponentClass({ text: 'test' });
  //   newComponent.setProps({ text });
  //   const spanText = newComponent.element?.querySelector(`#${id}`)?.innerHTML as unknown;
  //
  //   expect(spanText.to.be.eq(text));
  //
  // });

  it('Слушатели событий', () => {
    const handleStub = sinon.stub();
    const newComponent = new ComponentClass({
      events: {
        click: handleStub
      }
    });
    const event = new MouseEvent('click');
    newComponent.element?.dispatchEvent(event);
    expect(handleStub.calledOnce).to.be.true;
  });

  // it('Вызов dispatchComponentDidMount', () => {
  //
  // })
});
