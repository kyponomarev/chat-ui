import {Block, Props} from "../../modules/block";

export interface InternalErrorPageProps extends Props {
    title: string;
    description: string;
    backLink: {
        text: string;
        url: string;
    }
}

export default class InternalErrorPage extends Block {
    constructor(props: InternalErrorPageProps = {
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

    render(): string {
        const template = Handlebars.templates['pages/internal-error/internal-error.page'];
        return template(this._props);
    }
}

