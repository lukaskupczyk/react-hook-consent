import { ConsentOptions, ScriptCode, ScriptExternal } from '../Context';
import { idPrefix } from '../utils/config';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isScriptExternal(x: any): x is ScriptExternal {
    return !!x.id && !!x.src;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isScriptCode(x: any): x is ScriptCode {
    return !!x.id && !!x.code;
}

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

function addCodeScript(script: ScriptCode, elementId: string) {
    const { code } = script;

    const element = document.createElement('script');
    element.id = elementId;
    element.innerHTML = code;
    document.body.appendChild(element);
}

function addExternalScript(script: ScriptExternal, elementId: string) {
    const { src } = script;

    const element = document.createElement('script');
    element.id = elementId;
    element.src = src;
    element.async = true;
    document.body.appendChild(element);
}
