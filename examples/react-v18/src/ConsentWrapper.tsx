/*
 * Consent wrapper including theme toggle
 */

import React, { useCallback, useState } from 'react';
import { ConsentBanner, ConsentOptions, ConsentProvider, Theme } from 'react-hook-consent';

const consentOptions: ConsentOptions = {
    services: [
        {
            id: 'myid',
            name: 'MyName',
            scripts: [
                { id: 'external-script', src: 'https://myscript.com/script.js' },
                { id: 'inline-code', code: `alert("I am a JavaScript code");` },
            ],
        },
    ],
    theme: 'light',
};

export function ConsentWrapper({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<Theme>(consentOptions.theme ?? 'light');

    const onThemeToggle = useCallback(() => {
        setTheme((theme) => (theme === 'light' ? 'dark' : 'light'));
    }, []);

    return (
        <ConsentProvider options={{ ...consentOptions, theme }}>
            <button onClick={onThemeToggle}>Toggle theme</button>
            {children}
            <ConsentBanner>
                <>
                    Optional individual consent text including a <a href="test">link</a>
                </>
            </ConsentBanner>
        </ConsentProvider>
    );
}
