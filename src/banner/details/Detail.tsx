import { useCallback } from 'react';
import Toggle from 'react-toggle';
import { Consent, ConsentOptionsService } from '../../Context';
import { useConsent } from '../../useConsent';

type ConsentBannerDetailProps = {
    onChange: (service: Consent, selected: boolean) => void;
    service: ConsentOptionsService;
};

export function ConsentBannerDetail({ onChange, service }: ConsentBannerDetailProps) {
    const { consent } = useConsent();

    const handleChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            onChange(service.id, e.target.checked);
        },
        [onChange, service.id]
    );

    return (
        <div className="rhc-details__content__main__detail">
            <div className="rhc-details__content__main__detail__title">
                <label className="rhc-details__content__main__detail__title__label" htmlFor={service.id}>
                    {service.name}
                </label>
                <Toggle id={service.id} defaultChecked={consent.includes(service.id)} onChange={handleChange} />
            </div>
            {service.description && (
                <p className="rhc-details__content__main__detail__description">{service.description}</p>
            )}
        </div>
    );
}
