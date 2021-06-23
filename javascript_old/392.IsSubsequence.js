/**
 Given a string s and a string t, check if s is subsequence of t.

 You may assume that there is only lower case English letters in both s and t. t is potentially a very long (length ~= 500,000) string, and s is a short string (<=100).

 A subsequence of a string is a new string which is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (ie, "ace" is a subsequence of "abcde" while "aec" is not).

 Example 1:
 s = "abc", t = "ahbgdc"

 Return true.

 Example 2:
 s = "axc", t = "ahbgdc"

 Return false.

 Follow up:
 If there are lots of incoming S, say S1, S2, ... , Sk where k >= 1B, and you want to check one by one to see if T has its subsequence. In this scenario, how would you change your code?
 * */


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  /**
   * 思路：
   * 声明待配对str
   * 遍历t，每找到一位s，则s进一位
   * 比对最后找到的字符的str的length与s的length
   * Runtime: 68 ms, faster than 64.38% of JavaScript online submissions for Is Subsequence.
   * Memory Usage: 39.8 MB, less than 33.33% of JavaScript online submissions for Is Subsequence.
   * */

  let str = '';
  let i = 0;
  for (const char of t) {
    if (i === s.length) {
      break;
    }
    if (char === s[i]) {
      str += s[i];
      i++;
    }
  }
  return str.length === s.length;
};

console.log(isSubsequence("abc","ahbgdc")); // true
console.log(isSubsequence("axc","ahbgdc")); // false
