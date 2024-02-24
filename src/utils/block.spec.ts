import sinon from 'sinon';
import { expect } from 'chai';
import { Block } from './block';
import { templator } from './templator';

interface Props {
  text?: string;
  events?: Record<string, () => void>
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
        return templator(`
          <div>
            <span id=${id}>${this.props.text}</span>
            <button></button>
          </div>`);
      }
    }

    ComponentClass = Component;
  });

  it('Создаётся компонент с переданными пропсами', () => {
    const text = 'Hello';
    const newComponent = new ComponentClass({ text });
    const spanText = newComponent.getContent()?.querySelector(`#${id}`)?.textContent;

    expect(spanText)
      .to
      .eq(text);
  });

  it('Реактивность на смену пропсов', () => {
    const text = 'new test';
    const newComponent = new ComponentClass({ text: 'test' });
    newComponent.setProps({ text });
    const spanText = newComponent.getContent()?.querySelector(`#${id}`)?.innerHTML as unknown;

    expect(spanText).to.eq(text);
  });

  it('Слушатели событий', () => {
    const handleStub = sinon.stub();
    const newComponent = new ComponentClass({
      events: {
        click: handleStub
      }
    });
    const event = new MouseEvent('click');
    newComponent.element?.dispatchEvent(event);

    expect(handleStub.calledOnce).to.be.true; // eslint-disable-line
  });

  it('Вызов dispatchComponentDidMount', () => {
    const newComponent = new ComponentClass({ text: 'Hi' });
    const spyCDM = sinon.spy(newComponent, 'componentDidMount');
    document.body.insertAdjacentElement('afterbegin', newComponent.getContent());

    expect(spyCDM.calledOnce).to.be.true; // eslint-disable-line
  });
});
