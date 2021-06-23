/**
 Given a non-empty array of integers, return the third maximum number in this array. If it does not exist, return the maximum number.
 The time complexity must be in O(n).

 Example 1:
 Input: [3, 2, 1]

 Output: 1

 Explanation: The third maximum is 1.
 Example 2:
 Input: [1, 2]

 Output: 2

 Explanation: The third maximum does not exist, so the maximum (2) is returned instead.
 Example 3:
 Input: [2, 2, 3, 1]

 Output: 1

 Explanation: Note that the third maximum here means the third maximum distinct number.
 Both numbers with value 2 are both considered as second maximum.
 * */

/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  /**
   * Runtime: 68 ms, faster than 46.61% of JavaScript online submissions for Third Maximum Number.
   * Memory Usage: 38.1 MB, less than 25.00% of JavaScript online submissions for Third Maximum Number.
   * */
  // let firstMax, secondMax, thirdMax;
  const sortNums = nums.sort((a, b) => b - a);
  if (sortNums.length < 3) return sortNums[0];
  const setArr = Array.from(new Set(sortNums));
  if (setArr.length < 3) return setArr[0];
  return setArr[2];
};

console.log(thirdMax([3, 2, 1])); // 1
console.log(thirdMax([1, 2])); // 2
console.log(thirdMax([2, 2, 3, 1])); // 1
console.log(thirdMax([1, 1, 2])); // 1
