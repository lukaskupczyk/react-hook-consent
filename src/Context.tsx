import React from 'react';

export type ConsentOptions = {
    services: {
        id: string;
        name: string;
        scripts?: { id: string; src?: string; code?: string }[];
    }[];
};

export type Consent = string[];

type ConsentContext = {
    consent: Consent;
    showBanner: boolean;
    setShowBanner: () => void;
    setConsent: (consent: Consent) => void;
    options: ConsentOptions;
};

export const ConsentContext = React.createContext<ConsentContext>({
    consent: [],
    showBanner: true,
    setShowBanner: () => {},
    setConsent: ([]) => {},
    options: { services: [] },
});
