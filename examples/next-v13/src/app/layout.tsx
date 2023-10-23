'use client';
import { Inter } from 'next/font/google';
import { ConsentBanner, ConsentOptions, ConsentProvider } from 'react-hook-consent';
import './globals.css';
import 'react-hook-consent/dist/styles/style.css';

const inter = Inter({ subsets: ['latin'] });

const consentOptions: ConsentOptions = {
    services: [
        {
            id: 'myid_1',
            name: 'My Ads',
            description:
                'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
            scripts: [
                { id: 'external-script', src: 'https://myscript.com/script.js' },
                { id: 'inline-code', code: `alert("I am a JavaScript code");` },
            ],
        },
        {
            id: 'myid_2',
            name: 'My Maps',
            description:
                'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
            scripts: [
                { id: 'external-script', src: 'https://myscript.com/script.js' },
                { id: 'inline-code', code: `alert("I am a JavaScript code");` },
            ],
            mandatory: true,
        },
    ],
    // customHash: 'my-custom-hash',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <ConsentProvider options={consentOptions}>
            <html lang="en">
                <body className={inter.className}>
                    {children}
                    <ConsentBanner
                        decline={{ hidden: false, label: 'Decline' }}
                        settings={{ modal: { decline: { hidden: true } } }}
                    />
                </body>
            </html>
        </ConsentProvider>
    );
}
