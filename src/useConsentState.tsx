import hash from 'object-hash';
import { useCallback, useEffect, useState } from 'react';
import { Consent, ConsentOptions } from './Context';
import { addScripts } from './services/scripts/add';
import { getFromLocalStorage } from './utils/get-from-local-storage';
import { saveToLocalStorage } from './utils/save-to-local-storage';

export function useConsentState(options: ConsentOptions) {
    const [state, setState] = useState<{ consent: Consent[]; isBannerVisible: boolean; hash: string }>({
        consent: [],
        isBannerVisible: false,
        hash: hash(options),
    });

    useEffect(() => {
        const { consent, isBannerVisible } = getFromLocalStorage(state.hash);

        options.services.forEach(({ id, scripts }) => {
            if (consent.includes(id)) {
                addScripts(id, scripts);
            }
        });

        setState((state) => ({ ...state, consent, isBannerVisible }));
    }, [options.services, state.hash]);

    const setConsent = useCallback(
        (consent: Consent[]) => {
            setState((state) => ({ ...state, consent, isBannerVisible: false }));

            saveToLocalStorage(consent, state.hash);
        },
        [state.hash]
    );

    const toggleBanner = useCallback(() => {
        setState((state) => {
            return { ...state, isBannerVisible: !state.isBannerVisible };
        });
    }, []);

    return { consent: state.consent, isBannerVisible: state.isBannerVisible, toggleBanner, setConsent };
}
