/***********************************************************************
Write a recursive function called `sumToN` that takes in a number and returns
the sum of all the numbers from 0 to that number. Return null for any input
number below 0.

Examples:

sumToN(5) // returns 15
sumToN(1)  // returns 1
sumToN(9)  // returns 45
sumToN(-8)  // returns null
***********************************************************************/

function sumToN(n) {
  // base case: if n is less than 0, return null
  if (n < 0) {
    return null;
  }

  // base case: if n is 0, return 0
  if (n === 0) {
    return 0;
  }

  // recursive case: add n to the sum of numbers from 0 to n-1
  return n + sumToN(n - 1);
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = sumToN;
} catch (e) {
  module.exports = null;
}
