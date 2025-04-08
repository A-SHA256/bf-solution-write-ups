# [Chunk Array](https://leetcode.com/problems/chunk-array/description/?envType=study-plan-v2&envId=30-days-of-javascript)

The `chunk` function splits an array into smaller arrays, where each
smaller array has a specified size. This can be useful for tasks like pagination
or dividing data into manageable parts.

To use this function, you provide an array and a chunk size. The function will
return a new array containing the chunks, with each chunk being an array of
the specified size.

## Syntax

> chunk(`array`, `size`) -> `array`

### Parameters

**array**: `Array`

- The array that will be split into chunks.

**size**: `number`

- The size of each chunk. The last chunk may have fewer elements if the total
  number of elements is not evenly divisible by the `size`.

### Return Value: `Array`

- A new array containing the chunks. Each chunk is an array with up to `size` elements.

## Test Cases

Sample tests from Leetcode:

```js
// directly from Leetcode
describe('Basic Tests', () => {
  Test.assertEquals(chunk([1, 2, 3, 4, 5], 1), [[1], [2], [3], [4], [5]]);
  Test.assertEquals(chunk([1, 9, 6, 3, 2], 3), [[1, 9, 6], [3, 2]]);
  Test.assertEquals(chunk([8, 5, 3, 2, 6], 6), [[8, 5, 3, 2, 6]]);
});

// refactored to use describe/it/expect (what you will be learning at HYF)
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
});

```

## Use Cases

This function's behavior is relatively simple to understand. Here are a few
examples demonstrating how the `chunk` function can be used in different scenarios:

### Chunking an array into smaller chunks of size 3

```js
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const chunkedArray = chunk(numbers, 3);
console.log(chunkedArray); 
// Output: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
```

### Chunking an array when the chunk size is larger than the array length

```js
const smallArray = [10, 20, 30];
const chunkedArray = chunk(smallArray, 5);
console.log(chunkedArray); 
// Output: [[10, 20, 30]]
```

### Chunking an empty array

```js
const emptyArray = [];
const chunkedEmptyArray = chunk(emptyArray, 1);
console.log(chunkedEmptyArray); 
// Output: []
```

---

## Retrospective

Studying my `chunk` function helped me understand array manipulation more deeply.
The key takeaway was how to use `splice` for modifying the original array while
building chunks dynamically. This also gave me insight into managing loop boundaries
and breaking out of loops correctly.

### Continue Doing

- Continue experimenting with different array methods to improve chunking efficiency.
- Write tests for edge cases, such as empty arrays or very large arrays.

### Start Doing

- Break down the function into smaller, reusable components to enhance readability
  and maintainability.
- Use `map` or `reduce` instead of `splice` to avoid mutating the input array.

### Stop Doing

- Avoid over-complicating solutions by trying to handle all possible edge cases
  in one function. Sometimes simplicity is key.
