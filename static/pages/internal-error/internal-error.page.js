import { Block } from "../../modules/block.js";
export default class InternalErrorPage extends Block {
    constructor(props = {
        class: 'main main_centered container__main main_flow-column',
        attributes: {},
        handlers: {},
        title: '500',
        description: 'Произошла ошибка на стороне сервера!',
        backLink: {
            text: 'Назад',
            url: '/home',
        }
    }) {
        super('main', {
            ...props
        });
    }
    render() {
        const template = Handlebars.templates['pages/internal-error/internal-error.page'];
        return template(this._props);
    }
}
//# sourceMappingURL=internal-error.page.js.map