![publish workflow](https://github.com/lukaskupczyk/react-hook-consent/actions/workflows/publish.yml/badge.svg)
[![Test Coverage](https://api.codeclimate.com/v1/badges/807f879a42c4aa48c475/test_coverage)](https://codeclimate.com/github/lukaskupczyk/react-hook-consent/test_coverage)
[![npm version](https://badge.fury.io/js/react-hook-consent.svg)](https://badge.fury.io/js/react-hook-consent)
[![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

# react-hook-consent

React consent management solution and banner for cookies, local storage, session storage and (external) scripts.

![react-hook-consent Screenshot](/assets/screenshot.png)

## Demo

Check out the [CodeSandbox](https://codesandbox.io/s/example-react18-7d1rcb) for a working example.

## Documentation

-   [Documentation](https://lukaskupczyk.github.io/react-hook-consent/)

## Features

-   Provides the consent context to components
-   Loads (external) scripts based on consent state
-   Deletes cookies, local storage and session storage when consent declined
-   Hook to retrieve and change the current consent
-   Optional Banner with detailed settings to approve / decline consent
-   Persists the selection to local storage
-   Ready for Next.js
-   Dark and light mode
-   Styling via css

## Installation

```bash
yarn add react-hook-consent

# or

npm install react-hook-consent
```

## Basic usage

Wrap the application in the `ConsentProvider`. Provide settings via the `options` prop. Optionally use the `ConsentBanner` component to display a consent banner to the user.

```typescript
/*
 * index.tsx
 */

import { ConsentBanner, ConsentProvider } from 'react-hook-consent';

// styling
import 'react-hook-consent/dist/styles/style.css';

// ...
<ConsentProvider
    options={{
        services: [
            {
                id: 'myid',
                name: 'MyName',
                scripts: [
                    { id: 'external-script', src: 'https://myscript.com/script.js' },
                    { id: 'inline-code', code: `alert("I am a JavaScript code");` },
                ],
                cookies: [{ pattern: 'cookie-name' }],
                localStorage: ['local-storage-key'],
                sessionStorage: ['session-storage-key'],
                mandatory: true,
            },
        ],
        // customHash: 'my-custom-hash', // optional, e.g. when changing the options based on language
        theme: 'light',
    }}
>
    <App />
    <ConsentBanner
        settings={{ hidden: false, label: 'More', modal: { title: 'Modal title' } }}
        decline={{ hidden: false, label: 'No' }}
        approve={{ label: 'Yes' }}
    >
        <>
            Can we use cookies and external services according to our <a href="test">privacy policy</a> to improve the
            browsing experience?
        </>
    </ConsentBanner>
</ConsentProvider>;
// ...
```
