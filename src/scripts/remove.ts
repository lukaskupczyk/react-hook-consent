import { idPrefix } from '../utils/config';
import { ConsentOptions } from '../Context';

export function removeScripts(serviceId: string, scripts: ConsentOptions['services'][number]['scripts']) {
    if (!scripts) {
        return;
    }

    for (const { id } of scripts) {
        const element = document.getElementById(`${idPrefix}-${serviceId}-${id}`);

        if (!element) {
            continue;
        }

        element.remove();
    }
}
