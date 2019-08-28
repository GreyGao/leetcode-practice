/**
 Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

 You may assume that the array is non-empty and the majority element always exist in the array.

 Example 1:

 Input: [3,2,3]
 Output: 3
 Example 2:

 Input: [2,2,1,1,1,2,2]
 Output: 2
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  const limit = Math.ceil(nums.length / 2);
  const result = {};
  let maxNum = 0, maxCount = 0;

  nums.forEach(num=>{
    if(!result[num]){
      result[num] = 1
    }else{
      result[num] += 1
    }

    if(result[num] >=limit && result[num] >= maxCount){
      maxNum = num;
      maxCount = result[num];
    }
  })
  return maxNum;
};

console.log(majorityElement([3,2,3])); // 3
console.log(majorityElement([2,2,1,1,1,2,2])); // 2
