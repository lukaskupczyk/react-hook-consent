import { Consent } from '../../Context';
import { localStorageKey } from '../../config';

export function saveToLocalStorage(consent: Consent[], hash: string) {
    localStorage.setItem(`${localStorageKey}`, JSON.stringify({ consent, hash, updated: new Date() }));
}
