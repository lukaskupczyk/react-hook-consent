import '@testing-library/jest-dom';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { ConsentProvider } from '../../Provider';
import { ConsentBannerSettingsItem } from './Item';

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

describe('<ConsentBannerSettingsItem />', () => {
    afterEach(() => {
        cleanup();
    });

    test('expect item to be visible', async () => {
        // ARRANGE
        const onChangeMock = jest.fn();

        render(
            <TestingProvider>
                <ConsentBannerSettingsItem
                    onChange={onChangeMock}
                    id="test-id"
                    name="ServiceName"
                    description="Service description"
                />
            </TestingProvider>
        );

        // ASSERT
        expect(screen.queryByText(/servicename/i)).toBeInTheDocument();
        expect(screen.queryByText(/service description/i)).toBeInTheDocument();
    });

    test('expect onChange to be called with selected === true', async () => {
        // ARRANGE
        const onChangeMock = jest.fn();

        render(
            <TestingProvider>
                <ConsentBannerSettingsItem
                    onChange={onChangeMock}
                    id="test-id"
                    name="ServiceName"
                    description="Service description"
                />
            </TestingProvider>
        );

        // ACT
        await userEvent.click(screen.getByRole('checkbox'));

        // ASSERT
        expect(onChangeMock).toBeCalledWith('test-id', true);
    });

    test('expect onChange to be called with selected === false', async () => {
        // ARRANGE
        const onChangeMock = jest.fn();

        render(
            <TestingProvider>
                <ConsentBannerSettingsItem
                    onChange={onChangeMock}
                    id="test-id"
                    name="ServiceName"
                    description="Service description"
                />
            </TestingProvider>
        );

        // ACT
        await userEvent.click(screen.getByRole('checkbox'));
        await userEvent.click(screen.getByRole('checkbox'));

        // ASSERT
        expect(onChangeMock).toBeCalledWith('test-id', false);
    });
});
