/**
 Given an array nums and a value val, remove all instances of that value in-place and return the new length.
 Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
 The order of elements can be changed. It doesn't matter what you leave beyond the new length.
 */

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

// var removeElement = function(nums, val) {
//   const trash = [];
//   nums.forEach((num, index) => {
//     if (num === val) {
//       trash.push(index);
//     }
//   })
//   trash.forEach((i, index)=>{
//     nums.splice(i - index, 1);
//   })
//
//   return nums.length;
// };

var removeElement = function (nums, val) {
  while (nums.indexOf(val, 0)> -1){
    nums.splice(nums.indexOf(val,0), 1);
  }
  return nums.length;
};

console.log(removeElement([3, 2, 2, 3, 3], 3)); // 2
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)); // 5
