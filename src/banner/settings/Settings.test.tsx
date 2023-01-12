import '@testing-library/jest-dom';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { ConsentProvider } from '../../Provider';
import { ConsentBannerSettings } from './Settings';

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

const mockOnDecline = jest.fn();
const mockOnApprove = jest.fn();
jest.mock('../useConsentBannerActions', () => {
    return {
        useConsentBannerActions: () => {
            return {
                onDecline: mockOnDecline,
                onApprove: mockOnApprove,
            };
        },
    };
});

describe('<ConsentBannerSettings />', () => {
    afterEach(() => {
        cleanup();
    });

    test('expect to be visible with default labels', async () => {
        // ARRANGE
        const onToggleMock = jest.fn();

        render(
            <TestingProvider>
                <ConsentBannerSettings onToggle={onToggleMock} />
            </TestingProvider>
        );

        // ASSERT
        expect(screen.queryByText(/consent settings/i)).toBeInTheDocument();
        expect(
            screen.getByRole('button', {
                name: /decline/i,
            })
        ).toBeInTheDocument();
        expect(
            screen.getByRole('button', {
                name: /approve selection/i,
            })
        ).toBeInTheDocument();
        expect(
            screen.getByRole('button', {
                name: /approve all/i,
            })
        ).toBeInTheDocument();
    });

    test('expect to be visible with custom labels', async () => {
        // ARRANGE
        const onToggleMock = jest.fn();

        render(
            <TestingProvider>
                <ConsentBannerSettings
                    onToggle={onToggleMock}
                    modal={{
                        title: 'Example title',
                        description: 'Example description',
                        approve: { label: 'ok' },
                        approveAll: { label: 'all' },
                        decline: { label: 'no' },
                    }}
                />
            </TestingProvider>
        );

        // ASSERT
        expect(screen.queryByText(/example title/i)).toBeInTheDocument();
        expect(screen.queryByText(/example description/i)).toBeInTheDocument();
        expect(
            screen.getByRole('button', {
                name: /ok/i,
            })
        ).toBeInTheDocument();
        expect(
            screen.getByRole('button', {
                name: /all/i,
            })
        ).toBeInTheDocument();
        expect(
            screen.getByRole('button', {
                name: /no/i,
            })
        ).toBeInTheDocument();
    });

    test('expect visibility to be hidden upon outside click', async () => {
        // ARRANGE
        const onToggleMock = jest.fn();

        render(
            <TestingProvider>
                <ConsentBannerSettings onToggle={onToggleMock} />
            </TestingProvider>
        );

        // ACT
        await userEvent.click(screen.getByTestId('settings'));

        // ASSERT
        expect(onToggleMock).toHaveBeenCalled();
    });

    test('expect onApprove to be called upon approve selection button click', async () => {
        // ARRANGE
        const onToggleMock = jest.fn();

        render(
            <TestingProvider>
                <ConsentBannerSettings onToggle={onToggleMock} />
            </TestingProvider>
        );

        // ACT
        await userEvent.click(
            screen.getByRole('button', {
                name: /approve selection/i,
            })
        );

        // ASSERT
        expect(mockOnApprove).toHaveBeenCalled();
        expect(onToggleMock).toHaveBeenCalled();
    });

    test('expect onApprove to be called upon approve button click', async () => {
        // ARRANGE
        const onToggleMock = jest.fn();

        render(
            <TestingProvider>
                <ConsentBannerSettings onToggle={onToggleMock} />
            </TestingProvider>
        );

        // ACT
        await userEvent.click(
            screen.getByRole('button', {
                name: /approve all/i,
            })
        );

        // ASSERT
        expect(mockOnApprove).toHaveBeenCalled();
        expect(onToggleMock).toHaveBeenCalled();
    });

    test('expect onDecline to be called upon decline button click', async () => {
        // ARRANGE
        const onToggleMock = jest.fn();

        render(
            <TestingProvider>
                <ConsentBannerSettings onToggle={onToggleMock} />
            </TestingProvider>
        );

        // ACT
        await userEvent.click(
            screen.getByRole('button', {
                name: /decline/i,
            })
        );

        // ASSERT
        expect(mockOnDecline).toHaveBeenCalled();
        expect(onToggleMock).toHaveBeenCalled();
    });
});
