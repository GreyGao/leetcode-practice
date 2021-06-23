/**
 Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2.

 Note:

 The length of both num1 and num2 is < 5100.
 Both num1 and num2 contains only digits 0-9.
 Both num1 and num2 does not contain any leading zero.
 You must not use any built-in BigInteger library or convert the inputs to integer directly.
 * */

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  /**
   * 思路：
   * 由右至左进行每个数位的十进制计算
   * 每大于10则保存一个carry位
   * 遍历num1, num2
   * 每一位求和后插入至result数组的第一位
   * 最后检查carry位
   * 最后将得到的数组合并为result字符串
   * Runtime: 68 ms, faster than 61.71% of JavaScript online submissions for Add Strings.
   * Memory Usage: 36.1 MB, less than 62.50% of JavaScript online submissions for Add Strings.
   * */

  let i = num1.length - 1;
  let j = num2.length - 1;
  let carry = 0;
  let sum = 0;
  const result = [];

  while (i >= 0 || j >= 0) {
    sum = carry; // 积累次位的carry值
    if (i >= 0) {sum += num1[i] - 0;}
    if (j >= 0) {sum += num2[j] - 0;}
    carry = Math.floor(sum / 10); // 计算是否需要进位
    result.unshift(sum % 10); // 计算当前数位的结果
    sum = 0;  // 清零当位计算
    i--;
    j--;
  }
  // 检查最后是否还有首位
  if (carry) {
    result.unshift(1);
  }
  return result.join('')
};

console.log(addStrings('123', '321')); // '444'
console.log(addStrings('9', '99')); // '108'
console.log(addStrings('9333852702227987', '85731737104263')); // "9419584439332250"
console.log(addStrings('18582506933032752', '366213329703')); // "18582873146362455"

