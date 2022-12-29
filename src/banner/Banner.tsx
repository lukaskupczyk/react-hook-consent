import { useConsent } from '../useConsent';
import { useConsentBannerActions } from './useConsentBannerActions';

type ConsentBannerProps = {
    children?: React.ReactNode;
};

export function ConsentBanner({ children }: ConsentBannerProps) {
    const { isBannerVisible } = useConsent();
    const { onDecline, onApprove } = useConsentBannerActions();

    console.log(isBannerVisible);

    return (
        <>
            {isBannerVisible && (
                <div className="rhc-banner">
                    <div className="rhc-banner__content">
                        <div className="rhc-banner__content__message">
                            {children ? (
                                children
                            ) : (
                                <>
                                    We want to use cookies and external services to analyze and improve this website for
                                    you. You will find more details in our privacy policy.
                                </>
                            )}
                        </div>
                        <button className="rhc-banner__content__decline" onClick={onDecline}>
                            Decline
                        </button>
                        <button className="rhc-banner__content__approve" onClick={onApprove}>
                            Approve
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
