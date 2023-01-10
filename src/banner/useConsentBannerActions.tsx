import { useCallback, useState } from 'react';
import { Consent } from '../Context';
import { addScripts } from '../services/scripts/add';
import { removeScripts } from '../services/scripts/remove';
import { useConsent } from '../useConsent';
import { deleteAllCookies } from '../services/cookies/delete';
import { removeServices } from '../services/remove-services';

export function useConsentBannerActions() {
    const {
        setConsent,
        options: { services },
    } = useConsent();

    const [showDetails, setShowDetails] = useState(false);

    const onApprove = useCallback(
        (approved?: Consent[]) => {
            let selectedServices = services;

            if (approved) {
                selectedServices = selectedServices.filter((service) => approved.includes(service.id));

                removeServices(services, approved);
            }

            selectedServices.forEach(({ id, scripts }) => {
                addScripts(id, scripts);
            });

            setConsent(selectedServices.map(({ id }) => id));
        },
        [services, setConsent]
    );

    const onDecline = useCallback(() => {
        services.forEach(({ id, scripts }) => {
            removeScripts(id, scripts);
        });

        deleteAllCookies();

        setConsent([]);
    }, [services, setConsent]);

    const onDetailsToggle = useCallback(() => {
        setShowDetails((details) => !details);
    }, []);

    return { onDecline, onApprove, onDetailsToggle, isDetailsVisible: showDetails };
}
