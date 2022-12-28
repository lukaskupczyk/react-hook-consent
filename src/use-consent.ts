import { useContext } from 'react';
import { ConsentContext } from './Context';

export function useConsent() {
    return useContext(ConsentContext);
}
