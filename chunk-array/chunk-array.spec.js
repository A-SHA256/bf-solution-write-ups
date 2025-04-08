import { chunk } from './chunk-array.js';

describe('chunk function', () => {
    it('should split the array into chunks of size 1', () => {
        const result = chunk([1, 2, 3, 4, 5], 1);
        expect(result).toEqual([[1], [2], [3], [4], [5]]);
    });

    it('should split the array into chunks of size 3', () => {
        const result = chunk([1, 9, 6, 3, 2], 3);
        expect(result).toEqual([[1, 9, 6], [3, 2]]);
    });

    it('should return the entire array as a single chunk if the size is greater than the array length', () => {
        const result = chunk([8, 5, 3, 2, 6], 6);
        expect(result).toEqual([[8, 5, 3, 2, 6]]);
    });

    it('should return an empty array when the input array is empty', () => {
        const result = chunk([], 1);
        expect(result).toEqual([]);
    });
});
