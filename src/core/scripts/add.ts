import { ConsentOptions } from '../../Context';
import { idPrefix } from '../../config';
import { addCodeScript } from './add/code-script';
import { addExternalScript } from './add/external-script';
import { isScriptCode } from './is-script-code';
import { isScriptExternal } from './is-script-external';

export function addScripts(serviceId: string, scripts: ConsentOptions['services'][number]['scripts']) {
    if (!scripts) {
        return;
    }

    for (const script of scripts) {
        const { id } = script;
        const elementId = `${idPrefix}-${serviceId}-${id}`;

        if (document.getElementById(elementId)) {
            continue;
        }

        if (isScriptExternal(script)) {
            addExternalScript(script, elementId);
        }

        if (isScriptCode(script)) {
            addCodeScript(script, elementId);
        }
    }
}
