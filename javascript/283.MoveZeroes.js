/**
 Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

 Example:

 Input: [0,1,0,3,12]
 Output: [1,3,12,0,0]
 Note:

 You must do this in-place without making a copy of the array.
 Minimize the total number of operations.
 * */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  /**
   * 思路：
   * O(n)
   * 遍历数组，快慢指针，保证慢指针每确认一位数不为0，向前走一格，快指针按正常速度
   * 根据慢指针重新调整数组顺序
   * 如果当前快指针大于慢指针，则自动填充数字0
   *
   * Runtime: 60 ms, faster than 83.68% of JavaScript online submissions for Move Zeroes.
   * Memory Usage: 35.9 MB, less than 36.17% of JavaScript online submissions for Move Zeroes.
   * */
  let s = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[s] = nums[i];
      if (i > s) {
        nums[i] = 0;
      }
      s++;
    }

  }
  return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12])) // [1,3,12,0,0]
