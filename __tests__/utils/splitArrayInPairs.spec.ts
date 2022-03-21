import { splitArrayInPairs } from '@/main/utils';

describe('splitArrayInPairs function', () => {
    it('should return the correct array splited in pairs when the size of the input array is odd', () => {
        const arrayParameter = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        const expectedArray = [[1, 2], [3, 4], [5, 6], [7, 8], [9]];
        expect(splitArrayInPairs(arrayParameter)).toEqual(expectedArray);
    });
    it('should return the correct array splited in pairs when the size of the input array is even', () => {
        const arrayParameter = [1, 2, 3, 4, 5, 6, 7, 8];
        const expectedArray = [[1, 2], [3, 4], [5, 6], [7, 8]];
        expect(splitArrayInPairs(arrayParameter)).toEqual(expectedArray);
    });
});
