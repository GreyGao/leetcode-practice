/**
 Write an algorithm to determine if a number is "happy".

 A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

 Example:

 Input: 19
 Output: true
 Explanation:
 12 + 92 = 82
 82 + 22 = 68
 62 + 82 = 100
 12 + 02 + 02 = 1
 */


/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  let map = {};
  let input = n;
  while (input !==1 && !map[input]) {
    map[input] = true;
    const list = input.toString().split('');
    input = 0;
    list.map(char=> input += Math.pow(Number(char), 2));
  }

  return input === 1;
};

console.log(isHappy(19)); // true
