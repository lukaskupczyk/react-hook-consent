import { act, renderHook } from '@testing-library/react';
import { ConsentProvider } from './Provider';
import { useConsent } from './useConsent';

const options = {
    services: [
        { id: 'service1', name: 'Service 1' },
        { id: 'service2', name: 'Service 2' },
    ],
};

describe('useConsent', () => {
    it('should toggle isDetailsVisible state when toggleDetails is called', () => {
        const { result } = renderHook(() => useConsent(), {
            wrapper: ({ children }) => <ConsentProvider options={options}>{children}</ConsentProvider>,
        });

        expect(result.current.isDetailsVisible).toBe(false);

        act(() => {
            result.current.toggleDetails();
        });
        expect(result.current.isDetailsVisible).toBe(true);

        act(() => {
            result.current.toggleDetails();
        });
        expect(result.current.isDetailsVisible).toBe(false);
    });
});
