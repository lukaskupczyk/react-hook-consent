import { useCallback, useState } from 'react';
import { Consent } from '../Context';
import { useConsent } from '../useConsent';

export function useConsentBannerActions() {
    const {
        setConsent,
        options: { services },
    } = useConsent();

    const [showDetails, setShowDetails] = useState(false);

    const onApprove = useCallback(
        (approved?: Consent[]) => {
            setConsent(approved ? approved : services.map(({ id }) => id));
        },
        [services, setConsent]
    );

    const onDecline = useCallback(() => {
        setConsent([]);
    }, [setConsent]);

    const onDetailsToggle = useCallback(() => {
        setShowDetails((details) => !details);
    }, []);

    return { onDecline, onApprove, onDetailsToggle, isDetailsVisible: showDetails };
}
