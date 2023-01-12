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
            description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.',
            scripts: [
                { id: 'external-script', src: 'https://myscript.com/script.js' },
                { id: 'inline-code', code: `alert("I am a JavaScript code");` },
            ],
        },
        {
            id: 'myid2',
            name: 'MyName 2',
            cookies: [{ pattern: 'example_cookie' }],
        },
        {
            id: 'myid3',
            name: 'MyName 2',
            description:
                'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.',
            scripts: [{ id: 'external-script', src: 'https://myscript2.com/script.js' }],
        },
        {
            id: 'myid4',
            name: 'MyName 2',
            scripts: [{ id: 'external-script', src: 'https://myscript2.com/script.js' }],
        },
        {
            id: 'myid5',
            name: 'MyName 2',
            scripts: [{ id: 'external-script', src: 'https://myscript2.com/script.js' }],
        },
        {
            id: 'myid6',
            name: 'MyName 2',
            scripts: [{ id: 'external-script', src: 'https://myscript2.com/script.js' }],
        },
        {
            id: 'myid7',
            name: 'MyName 7',
            scripts: [{ id: 'external-script', src: 'https://myscript2.com/script.js' }],
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
            <ConsentBanner
                settings={{ hidden: false, label: 'More' }}
                decline={{ label: 'No' }}
                approve={{ label: 'Yes' }}
            >
                <>
                    Can we use cookies and external services according to our <a href="test">privacy policy</a> to
                    improve the browsing experience?
                </>
            </ConsentBanner>
        </ConsentProvider>
    );
}
