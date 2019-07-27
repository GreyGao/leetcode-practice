/**
 * Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.
 * Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  const stack = {};
  const trash = [];
  nums.forEach((num, index) => {
    if (stack[num]) {
      trash.push(index);
    } else {
      stack[num] = true;
    }
  })
  trash.forEach((i, index)=>{
    nums.splice(i - index, 1);
  })

  return nums.length;
};

console.log(removeDuplicates([1,1,2])); // 2
console.log(removeDuplicates([1, 2, 2, 3, 3])); // 3
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4])); // 5
