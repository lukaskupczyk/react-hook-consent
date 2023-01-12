import { ConsentOptionsService } from '../Context';
import { addServices } from './add-services';
import * as add from './scripts/add';

describe('addServices', () => {
    let mockAddScripts: jest.SpyInstance;

    beforeEach(() => {
        mockAddScripts = jest.spyOn(add, 'addScripts');
    });

    afterEach(() => {
        mockAddScripts.mockClear();
    });

    test('should call addScripts for each service', () => {
        const services: ConsentOptionsService[] = [
            {
                id: '1',
                name: 'Service 1',
                scripts: [
                    { id: 'url1', src: 'url1' },
                    { id: 'url2', src: 'url2' },
                ],
            },
            {
                id: '2',
                name: 'Service 2',
                scripts: [
                    { id: 'url3', src: 'url3' },
                    { id: 'url4', src: 'url4' },
                ],
            },
        ];

        addServices(services);

        expect(mockAddScripts.mock.calls.length).toBe(2);
        expect(mockAddScripts.mock.calls[0]).toEqual([
            '1',
            [
                { id: 'url1', src: 'url1' },
                { id: 'url2', src: 'url2' },
            ],
        ]);
        expect(mockAddScripts.mock.calls[1]).toEqual([
            '2',
            [
                { id: 'url3', src: 'url3' },
                { id: 'url4', src: 'url4' },
            ],
        ]);
    });

    test('should not call addScripts if services array is empty', () => {
        addServices([]);
        expect(mockAddScripts).not.toHaveBeenCalled();
    });
});
