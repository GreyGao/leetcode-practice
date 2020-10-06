/**
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.

 You may assume that each input would have exactly one solution, and you may not use the same element twice.

 Example:

 Given nums = [2, 7, 11, 15], target = 9,

 Because nums[0] + nums[1] = 2 + 7 = 9,
 return [0, 1].

 两数之后符合目标target，返回对应数字的位置index
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// self solutions
// var twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     const secondArr = nums.slice(i + 1, nums.length);
//     for (let item of secondArr) {
//       if (item + nums[i] === target) {
//         // 第二个数字需要从i+1之后的位置开始找
//         return [i, nums.indexOf(item, i+1)];
//       }
//     }
//   }
//   return [];
// };

// some good solutions
const twoSum = (nums, target) => {
  // 已经遍历过的值的map
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    const another = target - nums[i];

    // 在map中匹配另一个值是否存在
    if (another in map) {
      return [map[another], i];
    }

    // 保存已经遍历过的值的对象
    map[nums[i]] = i;
  }
  return null;
};

console.log(twoSum([1, 2, 3, 4], 6))
