import { getFromLocalStorage } from './get';
import { localStorageKey } from '../../config';

describe('getFromLocalStorage', () => {
    beforeEach(() => {
        localStorage.clear();
    });

    test('should return the correct data when a value is present in local storage', () => {
        const hash = 'abc123';
        const consent = ['1', '2', '3'];
        localStorage.setItem(`${localStorageKey}`, JSON.stringify({ consent, hash }));

        const result = getFromLocalStorage(hash);

        expect(result).toEqual({ consent, isBannerVisible: false, isDetailsVisible: false });
    });

    test('should return the correct data when local storage is empty', () => {
        const result = getFromLocalStorage('abc123');

        expect(result).toEqual({ consent: [], isBannerVisible: true, isDetailsVisible: false });
    });

    test('should return the correct data when hash is different', () => {
        localStorage.setItem(`${localStorageKey}`, JSON.stringify({ hash: 'def456', consent: [] }));

        const result = getFromLocalStorage('abc123');

        expect(result).toEqual({ consent: [], isBannerVisible: true, isDetailsVisible: false });
    });
});
