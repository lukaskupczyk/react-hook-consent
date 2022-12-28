import { useEffect, useCallback, useState } from 'react';
import { Consent, ConsentOptions } from './Context';
import { addScripts } from './scripts/add';
import { localStorageKey } from './utils/config';
import { getFromLocalStorage } from './utils/get-from-local-storage';

export function useConsentState(options: ConsentOptions) {
    const [state, setState] = useState<{ consent: Consent; showBanner: boolean }>({
        consent: [],
        showBanner: false,
    });

    useEffect(() => {
        const { consent, showBanner } = getFromLocalStorage();

        options.services.forEach(({ id, scripts }) => {
            if (consent.includes(id)) {
                addScripts(id, scripts);
            }
        });

        setState({ consent, showBanner });
    }, [options.services]);

    const setConsent = useCallback((consent: string[]) => {
        setState({ consent, showBanner: false });

        localStorage.setItem(`${localStorageKey}`, JSON.stringify({ consent }));
    }, []);

    const setShowBanner = useCallback(() => {
        setState((state) => {
            return { ...state, showBanner: true };
        });
    }, []);

    return { consent: state.consent, showBanner: state.showBanner, setShowBanner, setConsent };
}
