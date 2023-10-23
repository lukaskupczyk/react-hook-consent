import { ConsentOptionsService } from '../../Context';

export function removeSessionStorage(sessionStorageItems?: ConsentOptionsService['sessionStorage']) {
    if (sessionStorageItems) {
        for (const sessionStorageItem of sessionStorageItems) {
            sessionStorage.removeItem(sessionStorageItem);
        }
    }
}
