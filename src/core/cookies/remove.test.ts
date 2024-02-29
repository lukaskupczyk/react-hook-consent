import Cookies from 'js-cookie';
import { removeCookies } from './remove';

describe('removeCookies', () => {
    beforeEach(() => {
        Cookies.remove('cookie1');
        Cookies.remove('cookie2');
        Cookies.remove('cookie3');
        Cookies.remove('regex1');
        Cookies.remove('regex2');
    });

    it('should delete cookies that match the given patterns', () => {
        Cookies.set('cookie1', 'value1');
        Cookies.set('cookie2', 'value2');
        Cookies.set('cookie3', 'value3');
        Cookies.set('regex1', 'value4');
        Cookies.set('regex2', 'value5');

        removeCookies([{ pattern: 'cookie1' }, { pattern: 'cookie2' }, { pattern: /re/ }]);

        expect(Cookies.get('cookie1')).toBe(undefined);
        expect(Cookies.get('cookie2')).toBe(undefined);
        expect(Cookies.get('cookie3')).toBe('value3');
        expect(Cookies.get('regex1')).toBe(undefined);
        expect(Cookies.get('regex2')).toBe(undefined);
    });

    it('should do nothing if no cookies are passed as arguments', () => {
        Cookies.set('cookie1', 'value1');
        Cookies.set('cookie2', 'value2');

        removeCookies();

        expect(Cookies.get('cookie1')).toBe('value1');
        expect(Cookies.get('cookie2')).toBe('value2');
    });
});
