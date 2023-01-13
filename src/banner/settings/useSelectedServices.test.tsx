import { act, renderHook } from '@testing-library/react';
import { ConsentProvider } from '../../Provider';
import { useSelectedServices } from './useSelectedServices';

describe('useSelectedServices', () => {
    test('should initialize selectedServices with consent from useConsent hook', () => {
        // ARRANGE
        const { result } = renderHook(() => useSelectedServices(), {
            wrapper: ({ children }) => (
                <ConsentProvider
                    options={{
                        services: [
                            { id: 'service1', name: 'Service 1' },
                            { id: 'service2', name: 'Service 2' },
                        ],
                    }}
                >
                    {children}
                </ConsentProvider>
            ),
        });

        // ASSERT
        expect(result.current.selectedServices).toEqual([]);
    });

    test('should add service to selectedServices when handleSelectedServiceChange is called with selected=true', () => {
        // ARRANGE
        const { result } = renderHook(() => useSelectedServices(), {
            wrapper: ({ children }) => (
                <ConsentProvider
                    options={{
                        services: [
                            { id: 'service1', name: 'Service 1' },
                            { id: 'service2', name: 'Service 2' },
                        ],
                    }}
                >
                    {children}
                </ConsentProvider>
            ),
        });

        // ACT
        act(() => {
            result.current.handleSelectedServiceChange('service1', true);
        });

        // ASSERT
        expect(result.current.selectedServices).toEqual(['service1']);
    });
});
