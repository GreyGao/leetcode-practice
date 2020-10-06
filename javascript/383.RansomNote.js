/**
 Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines ; otherwise, it will return false.

 Each letter in the magazine string can only be used once in your ransom note.

 Note:
 You may assume that both strings contain only lowercase letters.

 canConstruct("a", "b") -> false
 canConstruct("aa", "ab") -> false
 canConstruct("aa", "aab") -> true
 * */

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  /**
   * 思路:
   * 建立一个相关于magazine的map, 判断map中的字母数是否能满足ransomNote的需求
   * Runtime: 76 ms, faster than 73.63% of JavaScript online submissions for Ransom Note.
   * Memory Usage: 38.4 MB, less than 33.33% of JavaScript online submissions for Ransom Note.
   * */

  const map = {};
  for (const char of magazine) {
    map[char] = map[char] ? (map[char] + 1) : 1;
  }

  for (const useChar of ransomNote) {
    if (map[useChar]) {
      map[useChar] -= 1;
    } else {
      return false;
    }
  }
  return true;
};

console.log(canConstruct("aa", "aab")); // true
console.log(canConstruct("aa", "ab")); // false
