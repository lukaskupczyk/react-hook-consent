import { useCallback } from 'react';
import Toggle from 'react-toggle';
import { Consent, ConsentOptionsService } from '../../Context';
import { useConsent } from '../../useConsent';

type ConsentBannerSettingsItemProps = {
    onChange: (service: Consent, selected: boolean) => void;
    id: ConsentOptionsService['id'];
    name: ConsentOptionsService['name'];
    description?: ConsentOptionsService['description'];
    mandatory?: ConsentOptionsService['mandatory'];
};

export function ConsentBannerSettingsItem({
    onChange,
    id,
    name,
    description,
    mandatory,
}: ConsentBannerSettingsItemProps) {
    const { consent } = useConsent();

    const handleChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            onChange(id, e.target.checked);
        },
        [onChange, id]
    );

    return (
        <div className="rhc-settings__content__main__item">
            <div className="rhc-settings__content__main__item__title">
                <label className="rhc-settings__content__main__item__title__label" htmlFor={id}>
                    {name}
                </label>
                <Toggle id={id} defaultChecked={consent.includes(id)} onChange={handleChange} disabled={mandatory} />
            </div>
            {description && <p className="rhc-settings__content__main__item__description">{description}</p>}
        </div>
    );
}
