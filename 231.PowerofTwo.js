/**
 Given an integer, write a function to determine if it is a power of two.

 Example 1:

 Input: 1
 Output: true
 Explanation: 20 = 1
 Example 2:

 Input: 16
 Output: true
 Explanation: 24 = 16
 Example 3:

 Input: 218
 Output: false
 */

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  if (n <= 0) return false;
  if (n === 1) return true;
  let i = n;
  while (i) {
    if (i === 1) return true;
    if (i % 2 === 1) return false
    i = i / 2;
  }
};

console.log(isPowerOfTwo(1)); // true
console.log(isPowerOfTwo(16)); // true
console.log(isPowerOfTwo(218)); // false
console.log(isPowerOfTwo(3)); // false
console.log(isPowerOfTwo(-16)); // false
