import type { AppProps } from 'next/app';
import Link from 'next/link';
import { ConsentBanner, ConsentOptions, ConsentProvider } from 'react-hook-consent';
import '../styles/globals.css';
import 'react-hook-consent/dist/styles/style.css';

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
        },
    ],
};

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ConsentProvider options={consentOptions}>
            <Component {...pageProps} />
            <ConsentBanner decline={{ hidden: false, label: 'Decline' }} />
        </ConsentProvider>
    );
}
