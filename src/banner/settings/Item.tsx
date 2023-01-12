import { useCallback } from 'react';
import Toggle from 'react-toggle';
import { Consent, ConsentOptionsService } from '../../Context';
import { useConsent } from '../../useConsent';

type ConsentBannerSettingsItemProps = {
    onChange: (service: Consent, selected: boolean) => void;
    service: ConsentOptionsService;
};

export function ConsentBannerSettingsItem({ onChange, service }: ConsentBannerSettingsItemProps) {
    const { consent } = useConsent();

    const handleChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            onChange(service.id, e.target.checked);
        },
        [onChange, service.id]
    );

    return (
        <div className="rhc-settings__content__main__item">
            <div className="rhc-settings__content__main__item__title">
                <label className="rhc-settings__content__main__item__title__label" htmlFor={service.id}>
                    {service.name}
                </label>
                <Toggle id={service.id} defaultChecked={consent.includes(service.id)} onChange={handleChange} />
            </div>
            {service.description && (
                <p className="rhc-settings__content__main__item__description">{service.description}</p>
            )}
        </div>
    );
}
