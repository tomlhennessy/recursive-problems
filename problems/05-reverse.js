/***********************************************************************
Write a recursive function reverse(string) that takes in a string and returns
it reversed.

Examples:

reverse("house"); // "esuoh"
reverse("dog"); // "god"
reverse("atom"); // "mota"
reverse("q"); // "q"
reverse("id"); // "di"
reverse(""); // ""
***********************************************************************/

function reverse(string) {
  // base case: if string is empty or only contains 1 char, return itself
  if (string.length <= 1) {
    return string;
  }

  // recursive case: return last char of string concatenated with
  // result of calling reverse on substring excluding last char
  return string.slice(-1) + reverse(string.slice(0, -1));
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = reverse;
} catch (e) {
  module.exports = null;
}
