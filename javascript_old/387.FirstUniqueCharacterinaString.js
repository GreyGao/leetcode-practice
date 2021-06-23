/**
 Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

 Examples:

 s = "leetcode"
 return 0.

 s = "loveleetcode",
 return 2.
 Note: You may assume the string contain only lowercase letters.
 * */

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  /**
   * 思路:
   * 建立一个hash map，遍历s，
   * 记录每一个char的index，
   * 如果出现了重复，就重新将index置为-1
   * 最后寻找map中不为-1的index的最小值
   * Runtime: 88 ms, faster than 80.33% of JavaScript online submissions for First Unique Character in a String.
   * Memory Usage: 37.9 MB, less than 77.50% of JavaScript online submissions for First Unique Character in a String.
   * */
  const map = {};
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (!(typeof map[char] === 'number')) {
      map[char] = i;
    } else {
      map[char] = -1;
    }
  }
  let minIndex = -1;
  Object.entries(map).forEach(item => {
    if (item[1] !== -1) {
      if (minIndex === -1) {
        minIndex = item[1];
      } else {
        minIndex = item[1] < minIndex ? item[1] : minIndex;
      }
    }
  })

  return minIndex;
};
//
console.log(firstUniqChar('leetcode')); // 0
console.log(firstUniqChar('loveleetcode')); // 2
console.log(firstUniqChar('cc')); // -1
