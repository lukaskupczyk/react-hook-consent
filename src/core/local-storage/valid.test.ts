import { localStorageKey } from '../../config';
import { isValidInLocalStorage } from './valid';

describe('isValidInLocalStorage', () => {
    beforeEach(() => {
        localStorage.clear();
    });

    test('should return false when local storage is empty', () => {
        const result = isValidInLocalStorage('abc123');

        expect(result).toBeFalsy();
    });

    test('should return false when hashes do not match', () => {
        localStorage.setItem(`${localStorageKey}`, JSON.stringify({ hash: 'def456', consent: [] }));

        const result = isValidInLocalStorage('abc123');

        expect(result).toBeFalsy();
    });

    test('should return true when a value is present in local storage and hashes match', () => {
        const hash = 'abc123';
        const consent = ['1', '2', '3'];
        localStorage.setItem(`${localStorageKey}`, JSON.stringify({ consent, hash }));

        const result = isValidInLocalStorage(hash);

        expect(result).toBeTruthy();
    });
});
