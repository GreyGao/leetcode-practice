/**
 Given an integer, write a function to determine if it is a power of three.

 Example 1:

 Input: 27
 Output: true
 Example 2:

 Input: 0
 Output: false
 Example 3:

 Input: 9
 Output: true
 Example 4:

 Input: 45
 Output: false
 Follow up:
 Could you do it without using any loop / recursion?
 * */

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  /**
   * 思路：
   * 使用换底公式 x = log10(n) / log10(3) = log3(n)
   * return x % 1 === 0 是否为整数解，得到n是否为3的x次方
   * Runtime: 180 ms, faster than 99.63% of JavaScript online submissions for Power of Three.
   * Memory Usage: 48.2 MB, less than 30.00% of JavaScript online submissions for Power of Three.
   */
  if (n <= 0) return false;
  if (n === 1) return true;
  return (Math.log10(n) / Math.log10(3)) % 1 === 0;
};

console.log(isPowerOfThree(9)) // true;
console.log(isPowerOfThree(18)) // false;
console.log(isPowerOfThree(27)) // true;
