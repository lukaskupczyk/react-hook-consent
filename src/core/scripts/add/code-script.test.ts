import { addCodeScript } from './code-script';

describe('addCodeScript', () => {
    test('should add a script element to the body with the provided code and id', () => {
        const code = "console.log('Hello, world!')";
        const elementId = 'test-script';

        addCodeScript(code, elementId);

        const scriptElement = document.getElementById(elementId);
        if (!scriptElement) {
            return;
        }

        expect(scriptElement).toBeTruthy();
        expect(scriptElement.innerHTML).toEqual(code);
        expect(scriptElement.parentNode).toEqual(document.body);
    });
});
