import { ConsentOptionsService } from '../../Context';

export function removeLocalStorage(localStorageItems?: ConsentOptionsService['localStorage']) {
    if (localStorageItems) {
        for (const localStorageItem of localStorageItems) {
            localStorage.removeItem(localStorageItem);
        }
    }
}
