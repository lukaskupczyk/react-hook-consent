import { localStorageKey } from './config';
import { Consent } from '../Context';

export function getFromLocalStorage() {
    const item = localStorage.getItem(`${localStorageKey}`);

    if (!item) {
        return { consent: [], isBannerVisible: true };
    }

    const { consent } = JSON.parse(item) as { consent: Consent | undefined };

    if (consent && consent.length > 0) {
        return { consent, isBannerVisible: false };
    }

    return { consent: [], isBannerVisible: false };
}
