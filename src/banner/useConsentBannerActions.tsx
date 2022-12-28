import { useCallback } from 'react';
import { deleteAllCookies } from '../utils/delete-cookies';
import { addScripts } from '../scripts/add';
import { removeScripts } from '../scripts/remove';
import { useConsent } from '../useConsent';

export function useConsentBannerActions() {
    const {
        setConsent,
        options: { services },
    } = useConsent();

    const onApprove = useCallback(() => {
        services.forEach(({ id, scripts }) => {
            addScripts(id, scripts);
        });

        setConsent(services.map(({ id }) => id));
    }, [services, setConsent]);

    const onDecline = useCallback(() => {
        services.forEach(({ id, scripts }) => {
            removeScripts(id, scripts);
        });

        deleteAllCookies();

        setConsent([]);
    }, [services, setConsent]);

    return { onDecline, onApprove };
}
