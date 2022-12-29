import { useEffect, useCallback, useState } from 'react';
import { Consent, ConsentOptions } from './Context';
import { addScripts } from './scripts/add';
import { localStorageKey } from './utils/config';
import { getFromLocalStorage } from './utils/get-from-local-storage';

export function useConsentState(options: ConsentOptions) {
    const [state, setState] = useState<{ consent: Consent; isBannerVisible: boolean }>({
        consent: [],
        isBannerVisible: false,
    });

    useEffect(() => {
        const { consent, isBannerVisible } = getFromLocalStorage();

        options.services.forEach(({ id, scripts }) => {
            if (consent.includes(id)) {
                addScripts(id, scripts);
            }
        });

        setState({ consent, isBannerVisible });
    }, [options.services]);

    const setConsent = useCallback((consent: string[]) => {
        setState({ consent, isBannerVisible: false });

        localStorage.setItem(`${localStorageKey}`, JSON.stringify({ consent }));
    }, []);

    const toggleBanner = useCallback(() => {
        setState((state) => {
            return { ...state, isBannerVisible: !state.isBannerVisible };
        });
    }, []);

    return { consent: state.consent, isBannerVisible: state.isBannerVisible, toggleBanner, setConsent };
}
