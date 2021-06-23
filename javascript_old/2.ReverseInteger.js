/**
 Given a 32-bit signed integer, reverse digits of an integer.

 Example 1:

 Input: 123
 Output: 321
 Example 2:

 Input: -123
 Output: -321
 Example 3:

 Input: 120
 Output: 21

 Note:
 Assume we are dealing with an environment which could only store integers within
 the 32-bit signed integer range: [−2^31,  2^31 − 1]. For the purpose of this problem,
 assume that your function returns 0 when the reversed integer overflows.
 */

/**
 * @param {number} x
 * @return {number}
 */
const reverse = (x) => {
  const range = [Math.pow(-2, 31), Math.pow(2, 31) - 1]
  if (x >= range[0] && x <= range[1]) {
    const sign = Math.sign(x);
    const charArr = Array.from(Math.abs(x).toString()).reverse();
    const result = sign * Number(charArr.join(''));
    if (result >= range[0] && result <= range[1]) {
      return sign * Number(charArr.join(''));
    } else {
      return 0
    }
  } else {
    return 0
  }
};

console.log(reverse(-120))
console.log(reverse(1534236469))
