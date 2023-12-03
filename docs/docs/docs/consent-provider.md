---
sidebar_position: 1
---

# ConsentProvider

The `ConsentProvider` is the main component of React Hook Consent. It provides the consent state to all child components and handles the consent changes.

## Usage

```typescript
/*
 * index.tsx
 */

import { ConsentProvider } from 'react-hook-consent';

const options: ConsentOptions = {
    // configure here
}

// ...
<ConsentProvider options={options}>
    // App comes here
</ConsentProvider>;
// ...
```

## API

### ConsentOptions

`ConsentOptions` is the main configuration object for the `ConsentProvider`. It has the following options:

| Name       | Type                    | Required | Description                                          | Default |
| ---------- | ----------------------- | -------- | ---------------------------------------------------- | ------- |
| services   | ConsentOptionsService[] | yes      | The configuration of the services to be covered      |         |
| customHash | string                  |          | A custom hash to detect if options have been updated |         |
| theme      | Theme                   |          | Configuration of light or dark theme                 | dark    |

### ConsentOptionsService

`ConsentOptionsService` is the configuration object for a service. It has the following options:

| Name           | Type                                  | Required | Description                                                         |
| -------------- | ------------------------------------- | -------- | ------------------------------------------------------------------- |
| id             | string                                | yes      | A unique id for the service, e.g. 'myid'                            |
| name           | string                                | yes      | The name of the service, e.g. 'My Service'                          |
| description    | string                                |          | The description of the service, e.g. 'My ID is a tracking service.' |
| scripts        | Array\<ScriptExternal \| ScriptCode\> |          | External script or code to load upon consent                        |
| cookies        | Cookie[]                              |          | Configuration of cookies to delete them upon decline                |
| localStorage   | string[]                              |          | Configuration of local storage to delete them upon decline          |
| sessionStorage | string[]                              |          | Configuration of session storage to delete them upon decline        |
| mandatory      | boolean                               |          | If true, the service is mandatory and cannot be declined            |

### Cookie

`Cookie` is the configuration object for a cookie. It has the following options:

| Name    | Type             | Required | Description                               |
| ------- | ---------------- | -------- | ----------------------------------------- |
| pattern | string \| RegExp | yes      | The name or a regex pattern of the cookie |

### ScriptExternal

`ScriptExternal` is the configuration object for an external script. It has the following options:

| Name | Type   | Required | Description                                                   |
| ---- | ------ | -------- | ------------------------------------------------------------- |
| id   | string | yes      | A unique id for the script, e.g. 'myscript'                   |
| src  | string | yes      | The link to the script, e.g. `https://myscript.com/script.js` |

### ScriptCode

`ScriptCode` is the configuration object for embedded JS code. It has the following options:

| Name | Type   | Required | Description                                                        |
| ---- | ------ | -------- | ------------------------------------------------------------------ |
| id   | string | yes      | A unique id for the script, e.g. 'myscript'                        |
| code | string | yes      | The js Code of the script, e.g. `alert("I am a JavaScript code");` |
