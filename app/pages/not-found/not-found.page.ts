import * as template from './not-found.page.handlebars';

import {Block, Props} from "../../modules/block";

export interface NotFoundPageProps extends Props {
    title: string;
    description: string;
    backLink: {
        text: string;
        url: string;
    }
}

export default class NotFoundPage extends Block {
    constructor(props: NotFoundPageProps = {
        class: 'main main_centered container__main main_flow-column',
        attributes: {},
        handlers: {},
        title: '404',
        description: 'Вы нашли несуществующую страницу!',
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
        return template(this._props);
    }
}

