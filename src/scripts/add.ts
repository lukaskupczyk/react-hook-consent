import { idPrefix } from '../config';
import { ConsentOptions } from '../Context';

export function addScripts(serviceId: string, scripts: ConsentOptions['services'][number]['scripts']) {
    if (!scripts) {
        return;
    }

    for (const { id, src } of scripts) {
        if (!src) {
            continue;
        }

        const element = document.createElement('script');
        element.id = `${idPrefix}-${serviceId}-${id}`;
        element.src = src;
        element.async = true;
        document.body.appendChild(element);
    }
}
