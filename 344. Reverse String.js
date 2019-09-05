/**
 Write a function that reverses a string. The input string is given as an array of characters char[].

 Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

 You may assume all the characters consist of printable ascii characters.



 Example 1:

 Input: ["h","e","l","l","o"]
 Output: ["o","l","l","e","h"]
 Example 2:

 Input: ["H","a","n","n","a","h"]
 Output: ["h","a","n","n","a","H"]
 */


/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  let length = s.length;
  let i = 0;
  while (i < length) {
    const x = s[0];
    s.splice(0, 1);
    s.splice(length - 1 -i, 0, x);
    i++;
  }
  return s;
};

console.log(reverseString(["h", "e", "l", "l", "o"])); // ["o","l","l","e","h"]
