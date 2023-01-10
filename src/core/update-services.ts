import { Consent, ConsentOptions } from '../Context';
import { addServices } from './add-services';
import { saveToLocalStorage } from './local-storage/save';
import { removeServices } from './remove-services';

export function updateServices(options: ConsentOptions, consent: Consent[], hash: string) {
    const removedServices = options.services.filter((service) => !consent.includes(service.id));
    const addedServices = options.services.filter((service) => consent.includes(service.id));

    removeServices(removedServices);
    addServices(addedServices);

    saveToLocalStorage(consent, hash);
}
