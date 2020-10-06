/**
 Given an integer array nums, find the sum of the elements between indices i and j (i ≤ j), inclusive.

 Example:
 Given nums = [-2, 0, 3, -5, 2, -1]

 sumRange(0, 2) -> 1
 sumRange(2, 5) -> -1
 sumRange(0, 5) -> -3
 Note:
 You may assume that the array does not change.
 There are many calls to sumRange function.
 * */

/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  this.sums = [];
  if (nums.length > 0) {
    this.sums.push(nums[0])
    nums.reduce((acc, cur) => {
      const sum = acc + cur;
      this.sums.push(sum);
      return sum;
    })
  }

};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function (i, j) {
  /**
   * Runtime: O(n)
   * Runtime: 96 ms, faster than 66.39% of JavaScript online submissions for Range Sum Query - Immutable.
   * Memory Usage: 44 MB, less than 100.00% of JavaScript online submissions for Range Sum Query - Immutable.
   * */
  return this.sums[j] - (i - 1 >= 0 ? this.sums[i - 1] : 0)
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */
