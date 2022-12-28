import { useCallback, useEffect, useState } from 'react';
import { localStorageKey } from './config';
import { Consent, ConsentContext, ConsentOptions } from './Context';
import { addScripts } from './scripts/add';

type ConsentProviderProps = {
    options: ConsentOptions;
    children: React.ReactNode;
};

export function ConsentProvider({ options, children }: ConsentProviderProps) {
    const [state, setState] = useState<{ consent: Consent; showBanner: boolean }>({ consent: [], showBanner: false });

    const getFromLocalStorage = () => {
        const item = localStorage.getItem(`${localStorageKey}`);

        if (!item) {
            return { consent: [], showBanner: true };
        }

        const { consent } = JSON.parse(item) as { consent: Consent | undefined };

        if (consent && consent.length > 0) {
            return { consent, showBanner: false };
        }

        return { consent: [], showBanner: false };
    };

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

    return (
        <ConsentContext.Provider
            value={{ consent: state.consent, showBanner: state.showBanner, setShowBanner, setConsent, options }}
        >
            {children}
        </ConsentContext.Provider>
    );
}
