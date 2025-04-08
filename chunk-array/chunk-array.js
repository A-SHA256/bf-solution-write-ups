'use strict';

/**
 * Splits an array into chunks of a specified size.
 *
 * @param {Array} arr - The array to be split into chunks.
 * @param {number} size - The size of each chunk.
 * @returns {Array} A new array containing the chunks of the original array.
 */

export const chunk = (arr, size) => {
    const newArr = [];
    const measurement = arr.length / size;
    if (size > arr.length) {
        if (arr.length === 0) {
            return newArr;
        }
        newArr.push(arr);
    } else {
        for (let i = 0; i < measurement; i++) {
            newArr.push([]);
            for (let j = 0; j < size; j++) {
                if (arr[0] === undefined) {
                    break;
                }
                newArr[i].push(arr[0]);
                arr.splice(0, 1);
            }
        }
    }
    return newArr;
};
