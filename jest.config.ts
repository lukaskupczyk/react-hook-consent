import type { Config } from 'jest';

export default async (): Promise<Config> => {
    return {
        verbose: true,
        roots: ['<rootDir>/src/'],
        testEnvironment: 'jsdom',
    };
};
