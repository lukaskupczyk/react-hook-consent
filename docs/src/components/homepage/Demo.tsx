import { useColorMode } from '@docusaurus/theme-common';
import { ConsentBanner, ConsentProvider } from 'react-hook-consent';

export function HomepageDemo() {
    const { colorMode: theme } = useColorMode();

    return (
        <ConsentProvider
            options={{
                services: [
                    {
                        id: 'myid',
                        name: 'Consent Service',
                        cookies: [{ pattern: 'cookie-name' }],
                        localStorage: ['local-storage-key'],
                        sessionStorage: ['session-storage-key'],
                        mandatory: true,
                    },
                ],
                theme,
            }}
        >
            <ConsentBanner
                settings={{ hidden: false, label: 'More', modal: { title: 'Custom title' } }}
                decline={{ hidden: false, label: 'Decline' }}
                approve={{ label: 'Understood' }}
            >
                <>This is a demo consent banner. You can customize it as you like.</>
            </ConsentBanner>
        </ConsentProvider>
    );
}
