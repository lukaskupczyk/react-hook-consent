import hash from 'object-hash';
import { useCallback, useEffect, useState } from 'react';
import { Consent, ConsentOptions } from './Context';
import { addServices } from './core/add-services';
import { getFromLocalStorage } from './core/local-storage/get';
import { updateServices } from './core/update-services';

type ConsentState = { consent: Consent[]; isBannerVisible: boolean; hash: string };

export function useConsentState(options: ConsentOptions) {
    const [state, setState] = useState<ConsentState>({
        consent: [],
        isBannerVisible: false,
        hash: hash(options),
    });

    useEffect(() => {
        const { consent, isBannerVisible } = getFromLocalStorage(state.hash);

        setState((state) => ({ ...state, consent, isBannerVisible }));

        const approvedServices = options.services.filter((service) => consent.includes(service.id));
        addServices(approvedServices);
    }, [options.services, state.hash]);

    const setConsent = useCallback(
        (consent: Consent[]) => {
            setState((state) => ({ ...state, consent, isBannerVisible: false }));
            updateServices(options, consent, state.hash);
        },
        [options, state.hash]
    );

    const hasConsent = useCallback((id: Consent) => state.consent.includes(id), [state.consent]);

    const toggleBanner = useCallback(() => {
        setState((state) => ({ ...state, isBannerVisible: !state.isBannerVisible }));
    }, []);

    return { consent: state.consent, hasConsent, isBannerVisible: state.isBannerVisible, toggleBanner, setConsent };
}
