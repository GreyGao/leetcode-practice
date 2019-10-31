/**
 Given a non-empty string check if it can be constructed by taking a substring of it and appending multiple copies of the substring together. You may assume the given string consists of lowercase English letters only and its length will not exceed 10000.



 Example 1:

 Input: "abab"
 Output: True
 Explanation: It's the substring "ab" twice.
 Example 2:

 Input: "aba"
 Output: False
 Example 3:

 Input: "abcabcabcabc"
 Output: True
 Explanation: It's the substring "abc" four times. (And the substring "abcabc" twice.)
 * */

/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
  /**
   * 思路：
   * 如果s存在重复片段，则至少可以分割为A + B / A + B + C的重复片段，即A.length <= s.length / 2
   * let s1 = s + s // A + B + A + B  / A + B + C + A + B + C
   * let s2 = s1.slice(1, s1.length - 1) // (A) + B + A + (B)  / (A) + B + C + A + B + (C)
   * 如果 s2中存在s的片段，则意味着 B + A = A + B => A=B / B=A C=B A=C => A = B = C
   * 则可以确认s存在重复片段
   * Runtime: 60 ms, faster than 94.27% of JavaScript online submissions for Repeated Substring Pattern.
   * Memory Usage: 36.3 MB, less than 100.00% of JavaScript online submissions for Repeated Substring Pattern.
   * */
  // if(s.length % 2 !== 0) return false;
  let s1 = s + s;
  let s2 = s1.slice(1, s1.length - 1);
  return s2.indexOf(s) > -1;
};

console.log(repeatedSubstringPattern('abab')); // true
console.log(repeatedSubstringPattern('aba')); // false
console.log(repeatedSubstringPattern('abcabcabcabc')); // true
console.log(repeatedSubstringPattern('babbabbabbabbab')); // true



// 'a b a b a b'
// 'a'  'b'
//
// s1 = 'abab' + 'abab' = 'ab ab ab ab ab ab'
// s2 = 'bab' + 'aba' = 'b ab ab ab ab ab a'
//
// 'a b c a b c'
// 'a' 'c'
//
// s1 = 'abc abc abc abc'
// s2 = 'bc abc abc ab'

