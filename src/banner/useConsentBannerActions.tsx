import { useCallback } from 'react';
import { Consent } from '../Context';
import { useConsent } from '../useConsent';

export function useConsentBannerActions() {
    const {
        setConsent,
        options: { services },
    } = useConsent();

    const onApprove = useCallback(
        (approved?: Consent[]) => {
            setConsent(approved ? approved : services.map(({ id }) => id));
        },
        [services, setConsent]
    );

    const onDecline = useCallback(() => {
        setConsent([]);
    }, [setConsent]);

    return { onDecline, onApprove };
}
