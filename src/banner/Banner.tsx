import { ReactNode } from 'react';
import { useConsent } from '../useConsent';
import { ConsentBannerSettings, ConsentBannerSettingsModal } from './settings/Settings';
import { useConsentBannerActions } from './useConsentBannerActions';

export type ConsentBannerProps = {
    children?: ReactNode;
    settings?: {
        hidden?: boolean;
        label?: string | ReactNode;
        modal?: ConsentBannerSettingsModal;
    };
    decline?: {
        hidden?: boolean;
        label?: string | ReactNode;
    };
    approve?: {
        label?: string | ReactNode;
    };
};

export function ConsentBanner({ children, settings, approve, decline }: ConsentBannerProps) {
    const {
        isBannerVisible,
        isDetailsVisible,
        toggleDetails,
        options: { theme },
    } = useConsent();
    const { onDecline, onApprove } = useConsentBannerActions();

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
                        {settings?.hidden ? null : (
                            <button className="rhc-banner__content__secondary" onClick={toggleDetails}>
                                {settings?.label ? settings.label : <>Settings</>}
                            </button>
                        )}
                        {!decline?.hidden && (
                            <button className="rhc-banner__content__secondary" onClick={onDecline}>
                                {decline?.label ? decline.label : <>Decline</>}
                            </button>
                        )}
                        <button className="rhc-banner__content__primary" onClick={() => onApprove()}>
                            {approve?.label ? approve.label : <>Approve</>}
                        </button>
                    </div>
                </div>
            )}

            {isDetailsVisible && <ConsentBannerSettings onToggle={toggleDetails} modal={settings?.modal} />}
        </>
    );
}
