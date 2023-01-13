import { ScriptCode, ScriptExternal } from '../../Context';
import { isScriptCode } from './is-script-code';

test('isScriptCode', () => {
    const scriptExternal: ScriptExternal = { id: 'abc', src: 'https://example.com/script.js' };
    const scriptCode: ScriptCode = { id: 'def', code: 'console.log("Hello, world!");' };

    expect(isScriptCode(scriptExternal)).toBe(false);
    expect(isScriptCode(scriptCode)).toBe(true);
});
