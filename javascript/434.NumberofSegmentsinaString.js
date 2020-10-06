/**
 Count the number of segments in a string, where a segment is defined to be a contiguous sequence of non-space characters.

 Please note that the string does not contain any non-printable characters.

 Example:

 Input: "Hello, my name is John"
 Output: 5
 * */

/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function (s) {
  /**
   * 思路
   * 遍历字符串，如果遇到' '且上一位不是' '则默认为获取到一个segment
   * 最后结果加上最后一个' '后的segment
   * 返回结果
   * Runtime: 52 ms, faster than 63.96% of JavaScript online submissions for Number of Segments in a String.
   * Memory Usage: 33.8 MB, less than 60.00% of JavaScript online submissions for Number of Segments in a String.
   * */
  const cuts = s.trim();
  if (cuts === '') return 0;
  let count = 0;
  let pre = cuts[0];
  for (const char of cuts) {
    if (pre !== ' ' && char === ' ') {
      count += 1;
    }
    pre = char;
  }
  return count + 1;
};

console.log(countSegments('')); // 0
console.log(countSegments('    ')); // 0
console.log(countSegments(", , , ,        a, eaefa")); // 6
