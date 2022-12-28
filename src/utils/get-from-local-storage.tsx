import { localStorageKey } from './config';
import { Consent } from '../Context';

export function getFromLocalStorage() {
    const item = localStorage.getItem(`${localStorageKey}`);

    if (!item) {
        return { consent: [], showBanner: true };
    }

    const { consent } = JSON.parse(item) as { consent: Consent | undefined };

    if (consent && consent.length > 0) {
        return { consent, showBanner: false };
    }

    return { consent: [], showBanner: false };
}
