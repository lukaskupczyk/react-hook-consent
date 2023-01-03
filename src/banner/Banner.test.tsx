import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { ConsentProvider } from '../Provider';
import { ConsentBanner } from './Banner';

function TestingProvider({ children }: { children: React.ReactNode }) {
    return (
        <ConsentProvider
            options={{
                services: [],
                theme: 'light',
            }}
        >
            {children}
        </ConsentProvider>
    );
}

describe('<ConsentBanner />', () => {
    test('expect banner to be visible', async () => {
        // ARRANGE
        render(
            <TestingProvider>
                <ConsentBanner />
            </TestingProvider>
        );

        // ASSERT
        expect(
            screen.getByRole('button', {
                name: /approve/i,
            })
        ).toBeInTheDocument();
    });

    test('expect banner to be hidden upon approve', async () => {
        // ARRANGE
        render(
            <TestingProvider>
                <ConsentBanner />
            </TestingProvider>
        );

        // ACT
        await userEvent.click(
            screen.getByRole('button', {
                name: /approve/i,
            })
        );

        // ASSERT
        expect(
            screen.queryByRole('button', {
                name: /approve/i,
            })
        ).not.toBeInTheDocument();
    });
});
