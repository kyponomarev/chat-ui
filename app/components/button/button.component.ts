import './button.component.css';
import * as template from './button.component.handlebars';
import { Block, Props } from '../../modules/block';

export interface ButtonProps extends Props {
  text: string;
}

export default class ButtonComponent extends Block {
  constructor(props: ButtonProps) {
    super('div', props);
  }

  render(): string {
    return template(this._props);
  }
}
