# react-hook-consent

React consent management solution for cookies and (external) scripts.

![Consent Banner](/assets/banner.png)

![Consent Details](/assets/details.png)

## Features

-   Provides the consent context to components
-   Loads (external) scripts based on consent state
-   Deletes cookies when consent declined
-   Hook to retrieve and change the current consent
-   Optional Banner with detailed settings to approve / decline consent
-   Persists the selection to local storage
-   Ready for Next.js
-   Dark and light mode
-   Styling via css

## Examples

Check out the [CodeSandbox](https://codesandbox.io/s/example-react18-7d1rcb) for a working example.

More examples for React and Next.js are included in the `examples` folder of the repository.

## Installation

```bash
yarn add react-hook-consent

# or

npm install react-hook-consent
```

## Basic usage

### Provider

Wrap the application in the `ConsentProvider`. Provide settings via the `options` prop.

```typescript
/*
 * index.tsx
 */

import { ConsentProvider } from 'react-hook-consent';

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
            },
        ],
        theme: 'light',
    }}
>
    <App />
</ConsentProvider>;
// ...
```

#### Options Prop

| Name     | Type                    | Required | Description                                     | Default |
| -------- | ----------------------- | -------- | ----------------------------------------------- | ------- |
| services | ConsentOptionsService[] | yes      | The configuration of the services to be covered |         |
| theme    | Theme                   |          | Configuration of light or dark theme            | dark    |

The `services` array can be configured as follows:

| Name    | Type                                | Required | Description                                                         |
| ------- | ----------------------------------- | -------- | ------------------------------------------------------------------- |
| id      | string                              | yes      | A unique id for the service, e.g. 'myid'                            |
| name    | string                              | yes      | The name of the service, e.g. 'My Service'                          |
| name    | string                              |          | The description of the service, e.g. 'My ID is a tracking service.' |
| scripts | Array<ScriptExternal \| ScriptCode> |          | External script or code to load upon consent                        |
| cookies | Cookie[]                            |          | Configuration of cookies to delete them upon decline                |

`ScriptExternal` has the following options:

| Name | Type   | Required | Description                                                   |
| ---- | ------ | -------- | ------------------------------------------------------------- |
| id   | string | yes      | A unique id for the script, e.g. 'myscript'                   |
| src  | string | yes      | The link to the script, e.g. 'https://myscript.com/script.js' |

`ScriptCode` has the following options:

| Name | Type   | Required | Description                                                        |
| ---- | ------ | -------- | ------------------------------------------------------------------ |
| id   | string | yes      | A unique id for the script, e.g. 'myscript'                        |
| code | string | yes      | The js Code of the script, e.g. `alert("I am a JavaScript code");` |

`Cookie` has the following options:

| Name    | Type             | Required | Description                               |
| ------- | ---------------- | -------- | ----------------------------------------- |
| pattern | string \| RegExp | yes      | The name or a regex pattern of the cookie |

### Banner

Optionally use the banner component to render a banner to show a consent dialogue.

```typescript
/*
 * index.tsx
 */

import { ConsentBanner } from 'react-hook-consent';

// styling
import 'react-hook-consent/dist/styles/style.css';

// ...
<App />
<ConsentBanner>
    <>
        Optional individual consent text including a <a href="test">link</a>
    </>
</ConsentBanner>
```

#### Props

| Name     | Type      | Required | Description         | Default                                                                                                                                     |
| -------- | --------- | -------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| children | ReactNode |          | The consent message | We want to use cookies and external services to analyze and improve this website for you. You will find more details in our privacy policy. |

### Hooks

Use the provided `useConsent` hook to access or update the current consent and show or hide the banner.

```typescript
/*
 * App.tsx
 */

import { useConsent } from 'react-hook-consent';

// ...
const { consent, setConsent, isBannerVisible, toggleBanner } = useConsent();
// ...
```

#### Return

| Object Name     | Type                         | Description                                         |
| --------------- | ---------------------------- | --------------------------------------------------- |
| consent         | Consent[]                    | Services which have been consent to                 |
| isBannerVisible | boolean                      | Indicates if consent banner is visible              |
| toggleBanner    | () => void                   | Shows or hides the consent banner                   |
| setConsent      | (consent: Consent[]) => void | Update consent by providing consent ids to be saved |
