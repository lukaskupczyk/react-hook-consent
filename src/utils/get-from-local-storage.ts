import { localStorageKey } from './config';
import { Consent } from '../Context';

type StoredState = { consent?: Consent[]; hash?: string };

export function getFromLocalStorage(hash: string) {
    const item = localStorage.getItem(`${localStorageKey}`);

    if (!item) {
        return { consent: [], isBannerVisible: true };
    }

    const { consent, hash: storedHash } = JSON.parse(item) as StoredState;

    let isBannerVisible = false;
    if (storedHash !== hash) {
        isBannerVisible = true;
    }

    return { consent: consent && consent.length > 0 ? consent : [], isBannerVisible };
}
