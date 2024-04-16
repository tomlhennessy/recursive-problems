/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]
***********************************************************************/

function flatten(arr) {
  // initialise empty array to store flattened result
  let flattened = [];

  // loop through each element in array
  arr.forEach(element => {
    // if element is in an array, recursively call flatten and concatenate result
    if (array.isArray(element)) {
      flattened = flattened.concat(flatten(element));
    } else {
      // if element is not in array, push it to flattened
      flattened.push(element);
    }
  });

  // return flattened array
  return flattened;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = flatten;
} catch (e) {
  module.exports = null;
}
