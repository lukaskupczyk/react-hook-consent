import { ConsentContext, ConsentOptions } from './Context';
import { useConsentState } from './useConsentState';

type ConsentProviderProps = {
    options: ConsentOptions;
    children: React.ReactNode;
};

export function ConsentProvider({ options, children }: ConsentProviderProps) {
    const { consent, showBanner, setShowBanner, setConsent } = useConsentState(options);

    return (
        <ConsentContext.Provider value={{ consent, showBanner, setShowBanner, setConsent, options }}>
            {children}
        </ConsentContext.Provider>
    );
}
