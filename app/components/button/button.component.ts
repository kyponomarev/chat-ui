import {Block, Props} from '../../modules/block';


export default class ButtonComponent extends Block {
    constructor(props: Props) {
        super('div', props);
    }

    render(): string {
        const template = Handlebars.templates['components/button/button.component'];
        return template(this._props);
    }

}
