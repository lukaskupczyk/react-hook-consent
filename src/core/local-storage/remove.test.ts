import { removeLocalStorage } from './remove';

describe('removelocalStorage', () => {
    beforeEach(() => {
        localStorage.clear();
    });

    test('should remove all listed items from local storage', () => {
        localStorage.setItem('foo', 'bar');
        localStorage.setItem('baz', 'qux');
        localStorage.setItem('quux', 'quuz');

        removeLocalStorage(['foo', 'baz']);

        expect(localStorage.getItem('foo')).toBeNull();
        expect(localStorage.getItem('baz')).toBeNull();
        expect(localStorage.getItem('quux')).not.toBeNull();
    });
});
