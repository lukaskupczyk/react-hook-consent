import { useState, useCallback } from 'react';
import { Consent } from '../../Context';
import { useConsent } from '../../useConsent';

export function useSelectedServices() {
    const { consent } = useConsent();
    const [selectedServices, setSelectedServices] = useState<Consent[]>(consent);

    const handleSelectedServiceChange = useCallback((service: Consent, selected: boolean) => {
        setSelectedServices((services) => {
            return selected ? [...services, service] : services.filter((item) => item !== service);
        });
    }, []);

    return { selectedServices, handleSelectedServiceChange };
}
