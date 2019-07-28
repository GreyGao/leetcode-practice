/**
 Given a sorted array and a target value, return the index if the target is found. If not,
 return the index where it would be if it were inserted in order.
 You may assume no duplicates in the array.
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = (nums, target) => {
  for(let i=0; i<nums.length; i++){
    const num = nums[i];
    if(num >= target){
      return i;
    }
  }
  return nums.length;
};


console.log(searchInsert([1,3,5,6], 5)); // 2
console.log(searchInsert([1,3,5,6], 7)); // 4
console.log(searchInsert([1,3,5,6], 0)); // 0
