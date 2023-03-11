import { ReactNode, useCallback } from 'react';
import { useConsent } from '../../useConsent';
import { useConsentBannerActions } from '../useConsentBannerActions';
import { ConsentBannerSettingsItem } from './Item';
import { useSelectedServices } from './useSelectedServices';

export type ConsentBannerSettingsModal = {
    title?: string | ReactNode;
    description?: string | ReactNode;
    decline?: {
        label?: string | ReactNode;
    };
    approve?: {
        label?: string | ReactNode;
    };
    approveAll?: {
        label?: string | ReactNode;
    };
};

type ConsentBannerSettingsProps = { onToggle: () => void; modal?: ConsentBannerSettingsModal };

export function ConsentBannerSettings({ onToggle, modal }: ConsentBannerSettingsProps) {
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
        <div
            className={`${theme === 'light' ? 'rhc-theme-light' : 'rhc-theme-dark'} rhc-settings`}
            onClick={handleHide}
            data-testid="settings"
        >
            <div className="rhc-settings__content" onClick={(e) => e.stopPropagation()}>
                <div className="rhc-settings__content__header">
                    <h1>{modal?.title ? modal.title : <>Consent settings</>}</h1>
                    <p>
                        {modal?.description ? (
                            modal.description
                        ) : (
                            <>
                                We use cookies and third party services on this website. Some of them are essential,
                                others help us to improve your browsing experience. Feel free to adjust your individual
                                settings below.
                            </>
                        )}
                    </p>
                </div>
                <div className="rhc-settings__content__main">
                    {services.map(({ id, name, description, mandatory }, index) => (
                        <ConsentBannerSettingsItem
                            id={id}
                            name={name}
                            description={description}
                            mandatory={mandatory}
                            onChange={handleSelectedServiceChange}
                            key={index}
                        />
                    ))}
                </div>
                <div className="rhc-settings__content__footer">
                    <button className="rhc-settings__content__footer__secondary" onClick={handleDecline}>
                        {modal?.decline?.label ? modal?.decline?.label : <>Decline</>}
                    </button>
                    <button className="rhc-settings__content__footer__secondary" onClick={handleApproveSelected}>
                        {modal?.approve?.label ? modal?.approve?.label : <>Approve selection</>}
                    </button>
                    <button className="rhc-settings__content__footer__primary" onClick={handleApproveAll}>
                        {modal?.approveAll?.label ? modal?.approveAll?.label : <>Approve all</>}
                    </button>
                </div>
            </div>
        </div>
    );
}
