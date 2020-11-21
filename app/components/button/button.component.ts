import {Block, Props} from '../../modules/block';

export interface ButtonProps extends Props {
    text: string;
}

export default class ButtonComponent extends Block {
    constructor(props: ButtonProps) {
        super('div', props);
    }

    render(): string {
        const template = Handlebars.templates['components/button/button.component'];
        return template(this._props);
    }

}
