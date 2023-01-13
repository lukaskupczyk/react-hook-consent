import { localStorageKey } from '../../config';
import { saveToLocalStorage } from './save';

test('saveToLocalStorage', () => {
    const consent = ['1', '2', '3'];
    const hash = 'abc123';
    saveToLocalStorage(consent, hash);

    const item = localStorage.getItem(`${localStorageKey}`);

    if (!item) {
        return;
    }

    const storedData = JSON.parse(item);

    expect({ consent: storedData.consent, hash: storedData.hash }).toEqual({ consent, hash });
});
