import { ConsentOptionsService } from '../Context';
import { removeScripts } from './scripts/remove';

export function removeServices(services: ConsentOptionsService[], approved: string[]) {
    const unselectedServices = services.filter((service) => !approved.includes(service.id));

    unselectedServices.forEach(({ id, scripts, cookies }) => {
        removeScripts(id, scripts);

        if (cookies) {
            for (const cookie of cookies) {
                document.cookie = cookie.pattern + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT';
            }
        }
    });
}
