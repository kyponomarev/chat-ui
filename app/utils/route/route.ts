import {render} from "../render-dom/render-dom"
import {Block} from "../../modules/block";

export interface Props {
    [key: string]: unknown;

    rootQuery: string;
}

export class Route {
    private _pattern: RegExp;
    private _pathname: string;
    private _blockClass: { new(...args: any[]): Block; };
    private _block: Block | null;
    private _props: Props;
    private _isNotFound: boolean;

    constructor(pathname: string, view: { new(...args: any[]): Block; }, props: Props, isNotFound: boolean = false) {
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
            render(this._props.rootQuery, this._block);
            //TODO remove ts-ignore
            //@ts-ignore
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
