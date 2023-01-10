import { ScriptCode, ScriptExternal } from '../../Context';

export function isScriptCode(x: ScriptExternal | ScriptCode): x is ScriptCode {
    return !!x.id && !!(x as ScriptCode).code;
}
