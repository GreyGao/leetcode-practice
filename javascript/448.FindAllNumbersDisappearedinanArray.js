/**
 Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

 Find all the elements of [1, n] inclusive that do not appear in this array.

 Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.

 Example:

 Input:
 [4,3,2,7,8,2,3,1]

 Output:
 [5,6]
 * */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  /**
   * 思路：
   * 因为需求是不再申请额外的空间，并在O(n)时间内完成;
   * 使用index标记的思路
   * 遍历nums数组，标记当前num如果按升序排列所原本应该处在的位置
   * 如 -4 -> index = 3
   * 此时标记nums[3]的num为负数，意为找到了对应下标的原数字
   * 重新遍历数组，如果当前num>0则意味着数组中不存在当前index所应存在的num
   * 使用filter过滤函数返回那些缺失的数字
   * Runtime: 92 ms, faster than 94.90% of JavaScript online submissions for Find All Numbers Disappeared in an Array.
   * Memory Usage: 43.9 MB, less than 62.50% of JavaScript online submissions for Find All Numbers Disappeared in an Array.
   * */

  // 查找标记已存在的数字
  nums.forEach((num, i) => {
    let sortIndex = Math.abs(nums[i]) - 1;
    nums[sortIndex] = -Math.abs(nums[sortIndex]);
  });
  // 替换那些寻找到缺失的数字的原值
  nums.forEach((num, i) => {
    if (num > 0) {
      nums[i] = i + 1;
    }
  })
  // 过滤结果
  return nums.filter(num => num > 0);
};

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1])); // [5,6]
console.log(findDisappearedNumbers([4, 3, 4, 5, 1,])); // [2]
