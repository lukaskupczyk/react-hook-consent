import Cookies from 'js-cookie';
import { removeCookies } from './remove';

describe('removeCookies', () => {
    beforeEach(() => {
        Cookies.remove('cookie1');
        Cookies.remove('cookie2');
        Cookies.remove('cookie3');
    });

    it('should delete cookies that match the given patterns', () => {
        Cookies.set('cookie1', 'value1');
        Cookies.set('cookie2', 'value2');
        Cookies.set('cookie3', 'value3');

        removeCookies([{ pattern: 'cookie1' }, { pattern: 'cookie2' }]);

        expect(Cookies.get('cookie1')).toBe(undefined);
        expect(Cookies.get('cookie2')).toBe(undefined);
        expect(Cookies.get('cookie3')).toBe('value3');
    });

    it('should do nothing if no cookies are passed as arguments', () => {
        Cookies.set('cookie1', 'value1');
        Cookies.set('cookie2', 'value2');

        removeCookies();

        expect(Cookies.get('cookie1')).toBe('value1');
        expect(Cookies.get('cookie2')).toBe('value2');
    });
});
