import { ConsentOptionsService } from '../Context';
import { addScripts } from './scripts/add';

export function addServices(services: ConsentOptionsService[]) {
    services.forEach(({ id, scripts }) => {
        addScripts(id, scripts);
    });
}
