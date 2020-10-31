import { Block } from '../../modules/block.js';
export default class ButtonComponent extends Block {
    constructor(props) {
        super('div', props);
    }
    render() {
        const template = Handlebars.templates['components/button/button.component'];
        return template(this._props);
    }
}
//# sourceMappingURL=button.component.js.map