import { ConsentOptionsService } from '../Context';
import { removeCookies } from './cookies/remove';
import { removeLocalStorage } from './local-storage/remove';
import { removeScripts } from './scripts/remove';
import { removeSessionStorage } from './session-storage/remove';

export function removeServices(services: ConsentOptionsService[]) {
    services.forEach(({ id, scripts, cookies, localStorage, sessionStorage }) => {
        removeScripts(id, scripts);
        removeCookies(cookies);
        removeLocalStorage(localStorage);
        removeSessionStorage(sessionStorage);
    });
}
