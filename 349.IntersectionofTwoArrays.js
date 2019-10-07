/**
 Given two arrays, write a function to compute their intersection.

 Example 1:

 Input: nums1 = [1,2,2,1], nums2 = [2,2]
 Output: [2]
 Example 2:

 Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
 Output: [9,4]
 Note:

 Each element in the result must be unique.
 The result can be in any order.
 * */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  /**
   * 思路：
   * 寻找两个数组交叉的部分，之前有误解以为需要连续交叉
   * 寻找nums1、nums2中更短的数组作为hashMap
   * 寻找两者交叉重叠的部分
   * Runtime: 52 ms, faster than 92.15% of JavaScript online submissions for Intersection of Two Arrays.
   * Memory Usage: 35.6 MB, less than 7.69% of JavaScript online submissions for Intersection of Two Arrays.
   * */
  let shorter = nums1, longer = nums2;
  if(nums1.length > nums2.length) {
    shorter = nums2;
    longer = nums1;
  }

  const result = [];
  const map = new Set(shorter);
  for(const j of longer) {
    if(map.has(j)){
      result.push(j);
      map.delete(j);
    }
  }
  return result;
};

console.log(intersection([1,2,2,1],[2,2])); // [2]
console.log(intersection([4,9,5],[9,4,9,8,4])); // [9,4]
