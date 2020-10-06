/**
 Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

 Example 1:

 Input: [3,0,1]
 Output: 2
 Example 2:

 Input: [9,6,4,2,3,5,7,0,1]
 Output: 8
 Note:
 Your algorithm should run in linear runtime complexity. Could you implement it using only constant extra space complexity?
 * */

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  /**
   * 思路:
   * 1. nums + 1个数的和
   * 2. 两者相减得出缺失的数字
   *
   * reduce执行效率远高于forEach
   *
   * 自然数求和：
   * Sn = n * (n + 1) / 2
   *
   * Runtime: 48 ms, faster than 99.01% of JavaScript online submissions for Missing Number.
   * Memory Usage: 36 MB, less than 80.00% of JavaScript online submissions for Missing Number.
   * */
  const len = nums.length;
  const moreOneNumsSum = len * ( len + 1) / 2;
  const numsSum = nums.reduce((acc, cur)=> acc + cur);

  return moreOneNumsSum - numsSum;
};


console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])); // 8
