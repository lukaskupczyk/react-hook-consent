import { ReactNode } from 'react';
import { useConsent } from '../useConsent';
import { ConsentBannerDetails } from './details/Details';
import { useConsentBannerActions } from './useConsentBannerActions';

type ConsentBannerProps = {
    children?: React.ReactNode;
    details?: {
        hidden?: boolean;
        label?: string | ReactNode;
    };
    decline?: {
        label?: string | ReactNode;
    };
    approve?: {
        label?: string | ReactNode;
    };
};

export function ConsentBanner({ children, details, approve, decline }: ConsentBannerProps) {
    const {
        isBannerVisible,
        options: { theme },
    } = useConsent();
    const { onDecline, onApprove, onDetailsToggle, isDetailsVisible } = useConsentBannerActions();

    return (
        <>
            {isBannerVisible && !isDetailsVisible && (
                <div className={`${theme === 'light' ? 'rhc-theme-light' : 'rhc-theme-dark'} rhc-banner`}>
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
                        {details?.hidden ? null : (
                            <button className="rhc-banner__content__secondary" onClick={onDetailsToggle}>
                                {details?.label ? details.label : <>Settings</>}
                            </button>
                        )}
                        <button className="rhc-banner__content__secondary" onClick={onDecline}>
                            {decline?.label ? decline.label : <>Decline</>}
                        </button>
                        <button className="rhc-banner__content__primary" onClick={() => onApprove()}>
                            {approve?.label ? approve.label : <>Approve</>}
                        </button>
                    </div>
                </div>
            )}

            {isDetailsVisible && <ConsentBannerDetails onToggle={onDetailsToggle} />}
        </>
    );
}
