import { removeSessionStorage } from './remove';

describe('removeSessionStorage', () => {
    beforeEach(() => {
        sessionStorage.clear();
    });

    test('should remove all listed items from session storage', () => {
        sessionStorage.setItem('foo', 'bar');
        sessionStorage.setItem('baz', 'qux');
        sessionStorage.setItem('quux', 'quuz');

        removeSessionStorage(['foo', 'baz']);

        expect(sessionStorage.getItem('foo')).toBeNull();
        expect(sessionStorage.getItem('baz')).toBeNull();
        expect(sessionStorage.getItem('quux')).not.toBeNull();
    });
});
