/**
 Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.

 Example:

 Input: 38
 Output: 2
 Explanation: The process is like: 3 + 8 = 11, 1 + 1 = 2.
 Since 2 has only one digit, return it.
 Follow up:
 Could you do it without any loop/recursion in O(1) runtime?
 */

/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  /**
   * 思路：
   * input: 1~9 - only one digit
   * output: 1~9
   * input: 10, 11, 12, ... - internal add
   * output: 1, 2, 3 ... 9(18), 1(19), 2(20), 3(21), ... 9(27), 1(28), ...
   * */

  if (num < 10) return num;
  const n = num % 9;
  return n === 0 ? 9 : n;
};

console.log(addDigits(99)); // 9
