/**
 Given a positive integer num, write a function which returns True if num is a perfect square else False.

 Note: Do not use any built-in library function such as sqrt.

 Example 1:

 Input: 16
 Output: true
 Example 2:

 Input: 14
 Output: false
 * */

/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  /**
   * 思路:
   * 从num的中间值开始找, 是否有能够两两相乘的整数解
   * 持续使用二分法找到n为止
   * Runtime: 48 ms, faster than 92.52% of JavaScript online submissions for Valid Perfect Square.
   * Memory Usage: 33.8 MB, less than 75.00% of JavaScript online submissions for Valid Perfect Square.
   * */
  if (num === 1) return true;
  let high = Math.floor(num / 2);
  let low = 0;
  while (low !== high) {
    const mid = (low + high) / 2;
    if ((mid * mid) > num) {
      high = Math.floor(mid);
    } else {
      low = Math.round(mid);
    }
  }
  return (low * low) === num;
};
//
console.log(isPerfectSquare(100)); // true
console.log(isPerfectSquare(14)); // false
console.log(isPerfectSquare(8)); // false
console.log(isPerfectSquare(9)); // true
