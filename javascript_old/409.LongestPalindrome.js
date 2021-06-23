/**
 Given a string which consists of lowercase or uppercase letters, find the length of the longest palindromes that can be built with those letters.

 This is case sensitive, for example "Aa" is not considered a palindrome here.

 Note:
 Assume the length of given string will not exceed 1,010.

 Example:

 Input:
 "abccccdd"

 Output:
 7

 Explanation:
 One longest palindrome that can be built is "dccaccd", whose length is 7.
 * */

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  /**
   * 思路：
   * 声明返回值result = 0；
   * 建立一个关于参数s的map，遍历s，
   * 匹配map是否存在当前字符，如果存在则触发一次"消除"，result += 2
   * 最后比较result === s.length，如果不等于，则result += 1
   * 解释：如范例中"a"所示，除了配对后的字符，还可以增加一个中间字符
   * Runtime: 60 ms, faster than 76.69% of JavaScript online submissions for Longest Palindrome.
   * Memory Usage: 35.4 MB, less than 80.00% of JavaScript online submissions for Longest Palindrome.
   * */

  let result = 0;
  const map = {};
  for (const char of s) {
    if (!map[char]) {
      map[char] = 1;
    } else {
      map[char] -= 1;
      result += 2;
    }
  }
  return result === s.length ? result : result + 1;
};

console.log(longestPalindrome('abccccdd')); // 7
