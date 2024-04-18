/***********************************************************************
Write a function called `subsets` that will return all subsets of an array.

Examples:

subsets([]) // [[]]
subsets([1]) // [[], [1]]
subsets([1, 2]) // [[], [1], [2], [1, 2]]
subsets([1, 2, 3]) // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]

Hint: For subsets([1, 2, 3]), there are two kinds of subsets:
  1. Those that do not contain 3 (all of these are subsets of [1, 2]).
  2. For every subset that does not contain 3, there is also a corresponding
     subset that is the same, except it also does contain 3.
***********************************************************************/

function subsets(arr) {
  // base case: if array is empty, return empty array containing empty array
  if (arr.length === 0) {
    return [[]];
  }

  // remove last element from array
  const lastElement = arr[arr.length - 1];
  // recursively generate subsets of array without last element
  const withoutLast = subsets(arr.slice(0, -1));
  // for each subset without the last element,
  // create a new subset including last element
  const withLast = withoutLast.map(subset => subset.concat(lastElement));
  // combine subsets without last element and subsets with last element
  return withoutLast.concat(withLast);
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = subsets;
} catch (e) {
  module.exports = null;
}
