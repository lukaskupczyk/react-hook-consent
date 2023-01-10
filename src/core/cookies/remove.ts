import { Cookie } from '../../Context';

export function removeCookies(cookies?: Cookie[]) {
    if (cookies) {
        for (const cookie of cookies) {
            document.cookie = cookie.pattern + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT';
        }
    }
}
