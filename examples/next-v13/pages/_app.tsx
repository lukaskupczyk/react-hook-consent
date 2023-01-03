import type { AppProps } from 'next/app';
import Link from 'next/link';
import { ConsentBanner, ConsentOptions, ConsentProvider } from 'react-hook-consent';
import '../styles/globals.css';
import 'react-hook-consent/dist/styles/style.css';

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
};

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ConsentProvider options={consentOptions}>
            <Component {...pageProps} />
            <ConsentBanner>
                <>
                    Optional individual consent text including a <Link href={'/policy'}>link</Link>
                </>
            </ConsentBanner>
        </ConsentProvider>
    );
}
