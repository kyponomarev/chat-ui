import ButtonComponent from './button.component';

describe('components/button', () => {
  it('should create DOM element', () => {
    const btnCmp = new ButtonComponent({
      handlers: {},
      attributes: { type: 'submit' },
      class: 'button_primary',
      text: 'Hello world',
    });

    expect(btnCmp.getContent().innerHTML
      .trim()
      .replace('\n', '')).toEqual('<button class="button button_primary" type="submit" onclick="onClickHandler">Hello world</button>');
  });

  it('should rerender after updating properties', () => {
    const btnCmp = new ButtonComponent({
      handlers: {},
      attributes: { type: 'submit' },
      class: 'button_primary',
      text: 'Hello world',
    });
    btnCmp.setProps({ text: 'World hello' });

    expect(btnCmp.getContent().innerHTML
      .trim()
      .replace('\n', '')).toEqual(
      '<button class="button button_primary" type="submit" onclick="onClickHandler">World hello</button>',
    );
  });

  it('should call handler after click', () => {
    const clickHandler = jest.fn();

    const btnCmp = new ButtonComponent({
      handlers: { onClickHandler: () => clickHandler() },
      attributes: { id: 'test' },
      class: 'button_primary',
      text: 'Hello world',
    });

    document.body.appendChild(btnCmp.getContent());
    ButtonComponent.hydrate();

    const docBtn = document.getElementById('test');
    if (docBtn) {
      docBtn.click();
    }
    expect(clickHandler).toBeCalled();
  });

  it('should contain an attribute if it was not specified.', () => {
    const btnCmp = new ButtonComponent({
      handlers: {},
      attributes: { type: 'submit' },
      class: 'button_primary',
      text: 'Hello world',
    });

    expect(btnCmp.getInternalElement('button').getAttribute('type')).toEqual('submit');
  });

  it('should not contain an attribute if it was not specified.', () => {
    const btnCmp = new ButtonComponent({
      handlers: {},
      attributes: {},
      class: 'button_primary',
      text: 'Hello world',
    });

    expect(btnCmp.getInternalElement('button').getAttribute('type')).toBeNull();
  });

  it('should not contain pure html as component text', () => {
    const btnCmp = new ButtonComponent({
      handlers: {},
      attributes: {},
      class: 'button_primary',
      text: '<div>Hello world</div>',
    });

    expect(/[<>]/g.test(btnCmp.getInternalElement('button').innerHTML)).toBeFalsy();
  });
});
