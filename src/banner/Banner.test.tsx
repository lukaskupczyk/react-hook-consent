import '@testing-library/jest-dom';
import { cleanup, render, screen } from '@testing-library/react';
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
    afterEach(() => {
        cleanup();
    });

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

    test('expect banner elements to have default texts', async () => {
        // ARRANGE
        render(
            <TestingProvider>
                <ConsentBanner />
            </TestingProvider>
        );

        // ASSERT
        expect(
            screen.getByRole('button', {
                name: /settings/i,
            })
        ).toBeInTheDocument();
        expect(
            screen.getByRole('button', {
                name: /decline/i,
            })
        ).toBeInTheDocument();
        expect(
            screen.getByRole('button', {
                name: /approve/i,
            })
        ).toBeInTheDocument();
    });

    test('expect banner elements to have custom texts', async () => {
        // ARRANGE
        render(
            <TestingProvider>
                <ConsentBanner approve={{ label: 'yes' }} decline={{ label: 'no' }} settings={{ label: 'more' }} />
            </TestingProvider>
        );

        // ASSERT
        expect(
            screen.getByRole('button', {
                name: /yes/i,
            })
        ).toBeInTheDocument();
        expect(
            screen.getByRole('button', {
                name: /no/i,
            })
        ).toBeInTheDocument();
        expect(
            screen.getByRole('button', {
                name: /more/i,
            })
        ).toBeInTheDocument();
    });

    test('expect settings button to be hidden', async () => {
        // ARRANGE
        render(
            <TestingProvider>
                <ConsentBanner settings={{ hidden: true }} />
            </TestingProvider>
        );

        // ASSERT
        expect(
            screen.queryByRole('button', {
                name: /settings/i,
            })
        ).not.toBeInTheDocument();
    });

    test('expect decline button to be hidden', async () => {
        // ARRANGE
        render(
            <TestingProvider>
                <ConsentBanner decline={{ hidden: true }} />
            </TestingProvider>
        );

        // ASSERT
        expect(
            screen.queryByRole('button', {
                name: /decline/i,
            })
        ).not.toBeInTheDocument();
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
