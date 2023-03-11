import { localStorageKey } from '../../config';
import { StoredState } from './get';

export function isValidInLocalStorage(hash: string) {
    const item = localStorage.getItem(`${localStorageKey}`);

    if (!item) {
        return false;
    }

    const { hash: storedHash } = JSON.parse(item) as StoredState;

    if (storedHash !== hash) {
        return false;
    }

    return true;
}
