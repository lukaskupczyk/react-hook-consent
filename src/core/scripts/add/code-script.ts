import { ScriptCode } from '../../../Context';

export function addCodeScript(script: ScriptCode, elementId: string) {
    const { code } = script;

    const element = document.createElement('script');
    element.id = elementId;
    element.innerHTML = code;
    document.body.appendChild(element);
}
