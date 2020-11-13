import { Block } from "../../modules/block.js";
export default class NotFoundPage extends Block {
    constructor(props = {
        class: 'main main_centered container__main main_flow-column',
        attributes: {},
        handlers: {},
        title: '404',
        description: 'Вы нашли несуществующую страницу!',
        backLink: {
            text: 'Назад',
            url: '/',
        }
    }) {
        super('main', {
            ...props
        });
    }
    render() {
        const template = Handlebars.templates['pages/not-found/not-found.page'];
        return template(this._props);
    }
}
//# sourceMappingURL=not-found.page.js.map