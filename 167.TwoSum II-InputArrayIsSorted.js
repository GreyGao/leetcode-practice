/**
 Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.

 The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2.

 Note:

 Your returned answers (both index1 and index2) are not zero-based.
 You may assume that each input would have exactly one solution and you may not use the same element twice.
 Example:

 Input: numbers = [2,7,11,15], target = 9
 Output: [1,2]
 Explanation: The sum of 2 and 7 is 9. Therefore index1 = 1, index2 = 2.
 */


/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
  // var twoSum = function(numbers, target) {
  //   let result = [];
  //   for(let i=0; i<numbers.length; i++){
  //     const num = numbers[i];
  //     const remain = target - numbers[i];
  //     if(remain>=0) {
  //       const index = numbers.indexOf(remain, i+1);
  //       if(index && index > -1){
  //         result.push(i+1);
  //         result.push(index+1);
  //         return result
  //       }
  //     }
  //   }
  //   return result;
  // };

const twoSum = function(numbers, target) {
    let x = 0;
    let y = numbers.length - 1;

    while(x<y) {
      const start = numbers[x];
      const end = numbers[y];

      if(start+end === target) return [x + 1, y + 1];
      if(start+end > target) y--;
      else x++;
    }
  }
