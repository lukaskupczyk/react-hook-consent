---
sidebar_position: 2
---

# ConsentBanner

The `ConsentBanner` is a component to display a consent banner to the user. It is a fully customizable component.

## Usage

```typescript
/*
 * index.tsx
 */

import { ConsentBanner } from 'react-hook-consent';

// styling
import 'react-hook-consent/dist/styles/style.css';

const settings: ConsentBannerProps['settings'] = {
    // configure here
}

const decline: ConsentBannerProps['decline'] = {
    // configure here
}

const approve: ConsentBannerProps['approve'] = {
    // configure here
}

// ...
<App />
<ConsentBanner
    settings={settings}
    decline={decline}
    approve={approve}
>
     <>
        // configure banner content here
    </>
</ConsentBanner>
// ...
```

## Styling

The `ConsentBanner` comes with a default styling. If you want to use it, you have to import the stylesheet:

```typescript
import 'react-hook-consent/dist/styles/style.css';
```

If you want to use your own styling, you can import the component without the stylesheet. Instead you can provide your own styling based on `react-hook-consent/dist/styles/style.css`.

## API

### ConsentBannerProps

`ConsentBannerProps` is the configuration object for the `ConsentBanner`. It has the following options:

| Name            | Type                       | Required | Description                         | Default                                                                                                                                     |
| --------------- | -------------------------- | -------- | ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| children        | ReactNode                  |          | The consent message                 | We want to use cookies and external services to analyze and improve this website for you. You will find more details in our privacy policy. |
| settings.hidden | boolean                    |          | Hide the detailed settings button   | false                                                                                                                                       |
| settings.label  | string \| ReactNode        |          | Label of detailed settings button   | Settings                                                                                                                                    |
| settings.modal  | ConsentBannerSettingsModal |          | Configuration of the settings modal |                                                                                                                                             |
| approve.label   | string \| ReactNode        |          | Label of approve button             | Approve                                                                                                                                     |
| decline.label   | string \| ReactNode        |          | Label of decline button             | Decline                                                                                                                                     |
| decline.hidden  | boolean                    |          | Hide the decline button             | false                                                                                                                                       |

### ConsentBannerSettingsModal

`ConsentBannerSettingsModal` is the configuration object for the settings modal. It has the following options:

| Name             | Type                | Required | Description                 |
| ---------------- | ------------------- | -------- | --------------------------- |
| title            | string \| ReactNode |          | The title of the modal      |
| description      | string \| ReactNode |          | The description text        |
| decline.hidden   | boolean             |          | Hide the decline button     |
| decline.label    | string \| ReactNode |          | Label of decline button     |
| approve.label    | string \| ReactNode |          | Label of approve button     |
| approveAll.label | string \| ReactNode |          | Label of approve all button |
