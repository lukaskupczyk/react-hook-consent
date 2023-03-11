import React from 'react';

export type ScriptExternal = { id: string; src: string };
export type ScriptCode = { id: string; code: string };
export type Cookie = { pattern: string | RegExp };
export type Theme = 'light' | 'dark';

export type ConsentOptionsService = {
    id: string;
    name: string;
    description?: string;
    scripts?: Array<ScriptExternal | ScriptCode>;
    cookies?: Array<Cookie>;
    mandatory?: boolean;
};

export type ConsentOptions = {
    services: ConsentOptionsService[];
    theme?: Theme;
};

export type Consent = ConsentOptionsService['id'];

type ConsentContext = {
    consent: Consent[];
    hasConsent: (consent: Consent) => boolean;
    isBannerVisible: boolean;
    toggleBanner: () => void;
    setConsent: (consent: Consent[]) => void;
    options: ConsentOptions;
};

export const ConsentContext = React.createContext<ConsentContext>({
    consent: [],
    isBannerVisible: true,
    hasConsent: () => true,
    toggleBanner: () => {},
    setConsent: ([]) => {},
    options: { services: [] },
});
