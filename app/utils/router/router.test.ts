import {Router} from "./router";

describe('utils/router', () => {
    it('should subscribe on popstate event', () => {
        const router = new Router('');
        const mock = jest.fn();
        router.start();
        jest.spyOn(router, '_onRoute').mockImplementation(() => {
            mock();
        });

        window.dispatchEvent(new PopStateEvent('popstate'));
        expect(mock).toBeCalled();

    });

    it('should navigate to right path when popstate fire and on "go" call', () => {
        const router = new Router('');
        const mock = jest.fn();
        router.start();
        jest.spyOn(router, '_onRoute').mockImplementation((pathname: string) => {
            mock(pathname);
        });

        window.dispatchEvent(new PopStateEvent('popstate'));
        router.go('/test');
        expect(mock.mock.calls).toEqual([['/'], ['/test']]);

    });

    it('should change windows.location.href', () => {
        const router = new Router('');
        const mock = jest.fn();
        router.start();
        jest.spyOn(router, '_onRoute').mockImplementation((pathname: string) => {
            mock(pathname);
        });

        router.go('/test1');
        router.go('/test2');
        router.go('/test3');
        expect(mock.mock.calls).toEqual([['/test1'], ['/test2'], ['/test3']]);
    });


});

