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
   * 将nums进行排序后，进行遍历
   * 如果当前i!==num, 则将当前i push进入数组尾部
   * 否则将当前num unshift出去，
   * 当i=n时，返回数组
   * */

};

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1])); // [5,6]
