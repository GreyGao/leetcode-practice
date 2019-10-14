/**
 * Given a pattern and a string str, find if str follows the same pattern.
 Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in str.

 Example 1:

 Input: pattern = "abba", str = "dog cat cat dog"
 Output: true
 Example 2:

 Input:pattern = "abba", str = "dog cat cat fish"
 Output: false
 Example 3:

 Input: pattern = "aaaa", str = "dog cat cat dog"
 Output: false
 Example 4:

 Input: pattern = "abba", str = "dog dog dog dog"
 Output: false
 Notes:
 You may assume pattern contains only lowercase letters, and str contains lowercase letters that may be separated by a single space.
 */

/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function (pattern, str) {
  /**
   * Runtime: 52 ms, faster than 73.71% of JavaScript online submissions for Word Pattern.
   * Memory Usage: 33.7 MB, less than 100.00% of JavaScript online submissions for Word Pattern.
   * */
  const map = {};
  const list = str.split(' ');

  if (list.length === pattern.length) {
    for (let i = 0; i < list.length; i++) {
      const word = list[i];
      const values = Object.values(map);
      if (!map[word] && values.indexOf(pattern[i]) === -1) {
        map[word] = pattern[i];
      } else {
        if (map[word] !== pattern[i]) {
          return false;
        }
      }
    }
  } else {
    return false
  }
  return true;
};

console.log(wordPattern("abba","dog cat cat dog")); // true
console.log(wordPattern("abba","dog dog dog dog")); // false
console.log(wordPattern("aaaa","dog cat cat dog")); // false
console.log(wordPattern("jquery", "jquery")); // false
