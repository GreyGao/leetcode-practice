/**
 Given a positive integer, output its complement number. The complement strategy is to flip the bits of its binary representation.

 Note:
 The given integer is guaranteed to fit within the range of a 32-bit signed integer.
 You could assume no leading zero bit in the integer’s binary representation.
 Example 1:
 Input: 5
 Output: 2
 Explanation: The binary representation of 5 is 101 (no leading zero bits), and its complement is 010. So you need to output 2.
 Example 2:
 Input: 1
 Output: 0
 Explanation: The binary representation of 1 is 1 (no leading zero bits), and its complement is 0. So you need to output 0.
 * */

/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function (num) {
  /**
   * 思路：
   * 对于一个非负数，将其转化为二进制的字符串，
   * 遍历字符串，求该数的反码
   * 转化回数字，并转为十进制
   * Runtime: 48 ms, faster than 95.09% of JavaScript online submissions for Number Complement.
   * Memory Usage: 33.9 MB, less than 100.00% of JavaScript online submissions for Number Complement.
   * */

  const bNum = num.toString(2);
  const resultNum = [];
  for (const char of bNum) {
    resultNum.push(1 - char);
  }
  return parseInt(resultNum.join(''), 2);
};

console.log(findComplement(5)); // 2;
console.log(findComplement(1)); // 0;
