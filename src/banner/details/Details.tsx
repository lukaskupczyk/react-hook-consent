import { useCallback } from 'react';
import { useConsent } from '../../useConsent';
import { ConsentBannerDetail } from './Detail';
import { useConsentBannerActions } from '../useConsentBannerActions';
import { useSelectedServices } from './useSelectedServices';

export function ConsentBannerDetails({ onToggle }: { onToggle: () => void }) {
    const {
        options: { services, theme },
    } = useConsent();
    const { onDecline, onApprove } = useConsentBannerActions();
    const { selectedServices, handleSelectedServiceChange } = useSelectedServices();

    const handleHide = useCallback(() => onToggle(), [onToggle]);

    const handleDecline = useCallback(() => {
        onDecline();
        onToggle();
    }, [onDecline, onToggle]);

    const handleApproveSelected = useCallback(() => {
        onApprove(selectedServices);
        onToggle();
    }, [onApprove, onToggle, selectedServices]);

    const handleApproveAll = useCallback(() => {
        onApprove();
        onToggle();
    }, [onApprove, onToggle]);

    return (
        <div className={`${theme === 'light' ? 'rhc-theme-light' : 'rhc-theme-dark'} rhc-details`} onClick={handleHide}>
            <div className="rhc-details__content" onClick={(e) => e.stopPropagation()}>
                <div className="rhc-details__content__header">
                    <h1>Consent settings</h1>
                    <p>
                        We use cookies and third party services on this website. Some of them are essential, others help
                        us to improve your browsing experience. Feel free to adjust your individual settings below.
                    </p>
                </div>
                <div className="rhc-details__content__main">
                    {services.map((service, index) => (
                        <ConsentBannerDetail service={service} onChange={handleSelectedServiceChange} key={index} />
                    ))}
                </div>
                <div className="rhc-details__content__footer">
                    <button className="rhc-details__content__footer__secondary" onClick={handleDecline}>
                        Decline
                    </button>
                    <button className="rhc-details__content__footer__secondary" onClick={handleApproveSelected}>
                        Approve selecion
                    </button>
                    <button className="rhc-details__content__footer__primary" onClick={handleApproveAll}>
                        Approve all
                    </button>
                </div>
            </div>
        </div>
    );
}
