import { useConsent } from '../use-consent';
import { useConsentBannerActions } from './useConsentBannerActions';

type ConsentBannerProps = {
    children?: React.ReactNode;
};

export function ConsentBanner({ children }: ConsentBannerProps) {
    const { showBanner } = useConsent();
    const { onDecline, onApprove } = useConsentBannerActions();

    return (
        <>
            {showBanner ? (
                <div className="banner">
                    <div className="banner__content">
                        <div className="banner__content__message">
                            {children ? (
                                children
                            ) : (
                                <>
                                    We want to use cookies and external services to analyze and improve this website for
                                    you. You will find more details in our privacy policy.
                                </>
                            )}
                        </div>
                        <button className="banner__content__decline" onClick={onDecline}>
                            Decline
                        </button>
                        <button className="banner__content__approve" onClick={onApprove}>
                            Approve
                        </button>
                    </div>
                </div>
            ) : null}
        </>
    );
}
