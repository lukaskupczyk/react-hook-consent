import { Cookie } from '../../Context';

export function removeCookies(cookies?: Cookie[]) {
    if (!cookies) {
        return;
    }

    // get all cookies
    const documentCookies = document.cookie.split(';');

    for (const cookie of cookies) {
        // remove cookie by name
        if (typeof cookie.pattern === 'string') {
            document.cookie = cookie.pattern + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT';
            continue;
        }

        // remove cookies by pattern
        for (const documentCookie of documentCookies) {
            if (!cookie.pattern.test(documentCookie)) {
                continue;
            }

            console.log('remove cookie', documentCookie);

            document.cookie = documentCookie + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT';
        }
    }
}
