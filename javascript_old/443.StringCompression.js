/**
 Given an array of characters, compress it in-place.

 The length after compression must always be smaller than or equal to the original array.

 Every element of the array should be a character (not int) of length 1.

 After you are done modifying the input array in-place, return the new length of the array.


 Follow up:
 Could you solve it using only O(1) extra space?


 Example 1:

 Input:
 ["a","a","b","b","c","c","c"]

 Output:
 Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]

 Explanation:
 "aa" is replaced by "a2". "bb" is replaced by "b2". "ccc" is replaced by "c3".
 * */

/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
  /**
   * 思路:
   * 设置暂存前一位的参数pre，count，一个result字符串
   * 遍历数组，如果pre与当前的char不同
   * 需要为pre位的结果加上count
   * 否则，记录count进行下次循环，pre = char
   * 清洗input array，使input array每一位等于result的每个char
   *
   * follow up要求节省空间至O(1)，这里采用了牺牲时间，优化空间的策略
   * Runtime: 64 ms, faster than 78.17% of JavaScript online submissions for String Compression.
   * Memory Usage: 37.4 MB, less than 100.00% of JavaScript online submissions for String Compression.
   * */
  if (chars.length <= 1) return chars.length;
  let pre = '', count = 0, result = '';
  for (const char of chars) {
    if (pre !== char) {
      if (count > 1) {
        result += pre + count;
      } else {
        result += pre;
      }
      count = 0;
    }
    count++;
    pre = char;
  }
  if (count > 1) {
    result += pre + count;
  } else {
    result += pre;
  }
  chars.splice(0, chars.length);

  for(const s of result) {
    chars.push(s);
  }
  return chars.length;
};

console.log(compress(["a", "a", "b", "b", "c", "c", "c"])); // 6
console.log(compress(["a", "a"])); // 2 ["a","2"]
