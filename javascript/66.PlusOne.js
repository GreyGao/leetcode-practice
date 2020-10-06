/**
 Given a non-empty array of digits representing a non-negative integer, plus one to the integer.

 The digits are stored such that the most significant digit is at the head of the list,
 and each element in the array contain a single digit.

 You may assume the integer does not contain any leading zero, except the number 0 itself.

 Example 1:

 Input: [1,2,3]
 Output: [1,2,4]
 Explanation: The array represents the integer 123.
 Example 2:

 Input: [4,3,2,1]
 Output: [4,3,2,2]
 Explanation: The array represents the integer 4321.
 */

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  const stack = [];
  let i = digits.length - 1;
  while (digits[i] === 9) {
    stack.push(0);
    i--;
  }
  const num = digits[i] || 0;
  if (stack.length > 0) {
    // 去掉进位的部分
    digits.splice(i + 1, stack.length);
    // 被进位的值 + 1
    digits.splice(i, 1, num + 1);
    return digits.concat(stack);
  } else {
    const last = digits[digits.length - 1];
    digits.splice(digits.length - 1, 1, last + 1);
    return digits
  }
};

// Explanation: The array represents the integer 4321.
console.log(plusOne([4, 3, 2, 1])); // [4,3,2,2]
console.log(plusOne([9, 9])); // [1,0,0]
console.log(plusOne([9])); // [1,0]
console.log(plusOne([1, 9, 9])); // [2,0,0]
