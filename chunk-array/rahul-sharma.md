# [Rahul Sharma](https://leetcode.com/problems/chunk-array/solutions/3519210/multiple-approaches-slice-from-chunked-array-full-explanation)

```js
const chunk = (arr, size) => {
  const chunkedArray = [];

  for (let i = 0; i < arr.length; i += size) {
    chunkedArray.push(arr.slice(i, i + size));
  }

  return chunkedArray;
};

```

## Strategy

This problem involves breaking down an array into smaller arrays (chunks) of a
specified size. The strategy here is to iterate through the array, taking slices
of the original array with a size of size and pushing each slice into a new array.

## Implementation

Rahul wrote an implementation that efficiently creates chunks by:

- Using a for loop to step through the array in increments of size.

- Using Array.prototype.slice() to extract the correct chunk from the original array.

- Storing these chunks in a new array and returning it at the end.

**For loop iteration**: The loop runs by incrementing i by size each time, ensuring
that chunks of the appropriate size are created.

**Array slice**: The slice() method is used to create a sub-array from
the original array, from index i to i + size. This ensures that each chunk has
the specified size.

## Possible Refactors

This strategy could be implemented using alternative methods, such as:

- Using `reduce()` to accumulate chunks.

- Using `while` loop instead of for.

- Using `Array.from()` to generate the chunks directly.

## References

This solution demonstrates a simple, efficient way to split an array into chunks.
Key concepts include:

- Array slicing: A powerful tool for extracting parts of an array.

- Efficient looping: Incrementing the loop variable in steps of size allows
  for concise and correct chunking.
