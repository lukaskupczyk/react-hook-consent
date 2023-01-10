import { ConsentOptionsService } from '../Context';
import { removeCookies } from './cookies/remove';
import { removeScripts } from './scripts/remove';

export function removeServices(services: ConsentOptionsService[]) {
    services.forEach(({ id, scripts, cookies }) => {
        removeScripts(id, scripts);
        removeCookies(cookies);
    });
}
