/**
 * Given an integer (signed 32 bits), write a function to check whether it is a power of 4.

 Example 1:

 Input: 16
 Output: true
 Example 2:

 Input: 5
 Output: false
 Follow up: Could you solve it without loops/recursion?
 * */

/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function (num) {
  /**
   * 思路：
   * 4 ^ x = num
   * x = log2(num) / log2(4) = log4(num)（对数换底）
   * x % 1 === 0 判断x是否为整数
   *
   * Runtime: 64 ms, faster than 90.50% of JavaScript online submissions for Power of Four.
   * Memory Usage: 35.6 MB, less than 100.00% of JavaScript online submissions for Power of Four.
   */
  if (num <= 0) return false;
  if (num === 1) return true;
  const x = getBaselog(num) / getBaselog(4);
  return x % 1 === 0;
};

const getBaselog = (num) => {
  return Math.log(num) / Math.log(2)
}

console.log(isPowerOfFour(64)) // true;
console.log(isPowerOfFour(36)) // false;
console.log(isPowerOfFour(2)) // false;
