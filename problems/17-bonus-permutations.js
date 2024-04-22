/***********************************************************************
Write a recursive method permutations(array) that calculates all the
permutations of the given array. For an array of length n there are n! different
permutations. So for an array with three elements we will have 3 * 2 * 1 = 6
different permutations.

Examples:

permutations([1, 2]) // [[1, 2], [2, 1]]
permutations([1, 2, 3]) // [[1, 2, 3], [1, 3, 2],
                        // [2, 1, 3], [2, 3, 1],
                        // [3, 1, 2], [3, 2, 1]]
***********************************************************************/

function permutations(array) {
  if (array.length === 0) {
    return [[]]; // base case: empty array has one permutation, an empty array itself
  }

  const firstElement = array[0];
  const rest = array.slice(1);

  // recursive call to get permutations of the rest of the array
  const permsWithoutFirst = permutations(rest);

  const allPermutations = [];

  // for each permutation of rest of array, insert firstElement in all possible positions
  permsWithoutFirst.forEach(perm => {
    for (let i = 0; i <= perm.length; i++) {
      const permutation = [...perm.slice(0, i), firstElement, ...perm.slice(i)];
      allPermutations.push(permutation);
    }
  });

  return allPermutations;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = permutations;
} catch (e) {
  module.exports = null;
}
