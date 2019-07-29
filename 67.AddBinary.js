/**
 Given two binary strings, return their sum (also a binary string).

 The input strings are both non-empty and contains only characters 1 or 0.

 Example 1:

 Input: a = "11", b = "1"
 Output: "100"
 Example 2:

 Input: a = "1010", b = "1011"
 Output: "10101"

 "10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101"
 "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011"
 "110111101100010011000101110110100000011101000101011001000011011000001100011110011010010011000000000"
 */

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let result = '', carry = 0, value = 0;
  const aStr = a.split('').reverse().join('');
  const bStr = b.split('').reverse().join('');

  const maxLength = Math.max(aStr.length, bStr.length);
  for (let i = 0; i < maxLength; i++) {
    const charA = aStr[i] || 0;
    const charB = bStr[i] || 0;
    const sum = (+charA) + (+charB) + carry;
    value = sum % 2;
    carry = (sum - 2) >= 0 ? 1 : 0;
    result = result + value;
  }
  if (carry) {
    result = result + carry;
  }
  return result.split('').reverse().join('')
};

console.log(addBinary('11', '1')); // '100'
console.log(addBinary('1010', '1011')); // '10101'
