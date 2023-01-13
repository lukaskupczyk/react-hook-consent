import { idPrefix } from '../../config';
import { removeScripts } from './remove';

const serviceId = 'test-service';
const script1 = 'script1';
const script2 = 'script2';
const idScript1 = `${idPrefix}-${serviceId}-${script1}`;
const idScript2 = `${idPrefix}-${serviceId}-${script2}`;

describe('removeScripts', () => {
    beforeEach(() => {
        const script1 = document.createElement('script');
        script1.id = idScript1;
        script1.innerHTML = "console.log('Script 1')";
        document.body.appendChild(script1);

        const script2 = document.createElement('script');
        script2.id = idScript2;
        script2.innerHTML = "console.log('Script 2')";
        document.body.appendChild(script2);
    });

    test('should remove all scripts with the given serviceId and prefix', () => {
        const scripts = [
            { id: script1, code: '' },
            { id: script2, code: '' },
        ];

        removeScripts(serviceId, scripts);

        const el1 = document.getElementById(idScript1);
        const el2 = document.getElementById(idScript2);

        expect(el1).toBeFalsy();
        expect(el2).toBeFalsy();
    });

    test('should not remove any scripts if scripts is not provided', () => {
        removeScripts(serviceId, []);

        const el1 = document.getElementById(idScript1);
        const el2 = document.getElementById(idScript2);

        expect(el1).toBeTruthy();
        expect(el2).toBeTruthy();
    });
});
