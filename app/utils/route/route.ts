import {render} from "../render-dom/render-dom"
import {Block} from "../../modules/block";

export interface Props extends Record<string, unknown> { // TODO remove record
    rootQuery: string;
}

export class Route {
    private _pattern: RegExp;
    private _pathname: string;
    private _blockClass: any; // TODO change type
    private _block: Block | null;
    private _props: Props;
    private _isNotFound: boolean;

    constructor(pathname: string, view: any, props: Props, isNotFound: boolean = false) { // TODO change view type
        this._pathname = pathname;
        this._pattern = new RegExp('^' + pathname.replace(/:\w+/, '(\\w+)') + '$');
        this._blockClass = view;
        this._block = null;
        this._props = props;
        this._isNotFound = isNotFound;
    }


    leave() {
        if (this._block) {
            this._block.hide();
        }
    }

    match(pathname: string): boolean {
        return this._pattern.test(pathname);
    }

    render() {
        if (!this._block) {
            this._block = new this._blockClass();
            render(this._props.rootQuery, <Block>this._block);
            this._blockClass.hydrate();
            return;
        }
        this._block.show();
    }

    get isNotFound(): boolean {
        return this._isNotFound;
    }

    get pathname(): string {
        return this._pathname;
    }


}
