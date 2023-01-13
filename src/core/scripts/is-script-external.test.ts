import { ScriptCode, ScriptExternal } from '../../Context';
import { isScriptExternal } from './is-script-external';

test('isScriptExternal', () => {
    const scriptExternal: ScriptExternal = { id: 'abc', src: 'https://example.com/script.js' };
    const scriptCode: ScriptCode = { id: 'def', code: 'console.log("Hello, world!");' };

    expect(isScriptExternal(scriptExternal)).toBe(true);
    expect(isScriptExternal(scriptCode)).toBe(false);
});
