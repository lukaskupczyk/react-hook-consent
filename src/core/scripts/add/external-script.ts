import { ScriptExternal } from '../../../Context';

export function addExternalScript(script: ScriptExternal, elementId: string) {
    const { src } = script;

    const element = document.createElement('script');
    element.id = elementId;
    element.src = src;
    element.async = true;
    document.body.appendChild(element);
}
