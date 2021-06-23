/**
 Given an integer array nums,
 find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
 Example:

 Input: [-2,1,-3,4,-1,2,1,-5,4],
 Output: 6
 Explanation: [4,-1,2,1] has the largest sum = 6.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let total = nums[0];
  let sum = 0;
  for (let num of nums) {
    sum += num;
    // 结果小于本次求和， 以本次sum为最大值
    if (total < sum) {
      total = sum;
    }
    // 本次求和小于0，重新开始
    if (sum < 0) {
      sum = 0;
    }
  }
  return total;
};


// Explanation: [4,-1,2,1] has the largest sum = 6.
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
