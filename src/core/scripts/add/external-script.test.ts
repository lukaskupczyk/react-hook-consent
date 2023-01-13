import { addExternalScript } from './external-script';

describe('addExternalScript', () => {
    test('should add a script element to the body with the provided src and id', () => {
        const src = 'https://example.com/script.js';
        const elementId = 'test-script';

        addExternalScript(src, elementId);

        const scriptElement = document.getElementById(elementId) as HTMLScriptElement;

        if (!scriptElement) {
            return;
        }

        expect(scriptElement).toBeTruthy();
        expect(scriptElement.src).toEqual(src);
        expect(scriptElement.parentNode).toEqual(document.body);
        expect(scriptElement.async).toBeTruthy();
    });
});
