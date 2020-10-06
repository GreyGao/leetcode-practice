/**
 Write a function that takes a string as input and reverse only the vowels of a string.

 Example 1:

 Input: "hello"
 Output: "holle"
 Example 2:

 Input: "leetcode"
 Output: "leotcede"
 Note:
 The vowels does not include the letter "y".
 * */

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  /**
   * 思路：
   * 前后i、j两个指针
   * 遇到原音则交换位置
   * 直到i、j相遇为止
   * O(n)
   * Runtime: 80 ms, faster than 59.93% of JavaScript online submissions for Reverse Vowels of a String.
   * Memory Usage: 38.2 MB, less than 92.86% of JavaScript online submissions for Reverse Vowels of a String.
   * */
  const map = {
    a: true, e: true, i: true, o: true, u: true,
    A: true, E: true, I: true, O: true, U: true,
  };
  const arr = s.split('');
  let j = arr.length - 1;
  for (let i = 0; i < arr.length; i++) {
    if (i === j) break;
    const char = arr[i];
    if (map[char]) {
      while (i < j) {
        if (map[arr[j]]) {
          arr[i] = arr[j];
          arr[j] = char;
          j--;
          break;
        }
        j--;
      }
    }
  }
  return arr.join('');
};

// console.log(reverseVowels('hello')); // holle
console.log(reverseVowels('leetcode')); // leotcede
