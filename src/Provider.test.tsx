import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useCallback } from 'react';
import { ConsentProvider } from './Provider';
import { useConsent } from './useConsent';

const TestingComponent = () => {
    const { isBannerVisible, toggleBanner } = useConsent();

    const handleClick = useCallback(() => {
        toggleBanner();
    }, [toggleBanner]);

    return (
        <>
            <div data-testid="show-banner">{isBannerVisible ? 'visible' : 'hidden'}</div>
            <button onClick={() => handleClick()}>toggle</button>
        </>
    );
};

describe('<ConsentProvider />', () => {
    test('expect banner to be visible', async () => {
        // ARRANGE
        render(
            <ConsentProvider options={{ services: [{ id: 'test', name: 'Test' }] }}>
                <TestingComponent />
            </ConsentProvider>
        );

        // ASSERT
        expect(screen.getByTestId('show-banner')).toHaveTextContent('visible');
    });

    test('expect banner to be hidden', async () => {
        // ARRANGE
        render(
            <ConsentProvider options={{ services: [] }}>
                <TestingComponent />
            </ConsentProvider>
        );

        // ACT
        await userEvent.click(screen.getByText('toggle'));

        // ASSERT
        expect(screen.getByTestId('show-banner')).toHaveTextContent('hidden');
    });
});
