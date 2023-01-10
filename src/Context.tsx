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
};

export type ConsentOptions = {
    services: ConsentOptionsService[];
    theme?: Theme;
};

export type Consent = string;

type ConsentContext = {
    consent: Consent[];
    isBannerVisible: boolean;
    toggleBanner: () => void;
    setConsent: (consent: Consent[]) => void;
    options: ConsentOptions;
};

export const ConsentContext = React.createContext<ConsentContext>({
    consent: [],
    isBannerVisible: true,
    toggleBanner: () => {},
    setConsent: ([]) => {},
    options: { services: [] },
});
