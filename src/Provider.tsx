import { ConsentContext, ConsentOptions } from './Context';
import { useConsentState } from './useConsentState';

type ConsentProviderProps = {
    options: ConsentOptions;
    children: React.ReactNode;
};

export function ConsentProvider({ options, children }: ConsentProviderProps) {
    const { consent, hasConsent, isBannerVisible, toggleBanner, isDetailsVisible, toggleDetails, setConsent } =
        useConsentState(options);

    return (
        <ConsentContext.Provider
            value={{
                consent,
                hasConsent,
                isBannerVisible,
                toggleBanner,
                isDetailsVisible,
                toggleDetails,
                setConsent,
                options,
            }}
        >
            {children}
        </ConsentContext.Provider>
    );
}
