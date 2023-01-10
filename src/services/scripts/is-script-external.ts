import { ScriptCode, ScriptExternal } from '../../Context';

export function isScriptExternal(x: ScriptExternal | ScriptCode): x is ScriptExternal {
    return !!x.id && !!(x as ScriptExternal).src;
}
