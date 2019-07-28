/**
 Given a string s consists of upper/lower-case alphabets and empty space characters ' ',
 return the length of last word in the string.
 If the last word does not exist, return 0.

 Note: A word is defined as a character sequence consists of non-space characters only.

 Example:
 Input: "Hello World"
 Output: 5
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  const trimStr = s.trim();
  if (trimStr.length === 0) return 0;
  let lastWord = '';
  for (let i = s.length - 1; i >= 0; i--) {
    const char = s[i];
    if (char === ' ' && lastWord.trim()) {
      // 去空
      return lastWord.trim().length;
    }
    lastWord = char + lastWord;
  }
  // 去空
  return trimStr.length;
};

// console.log(lengthOfLastWord("Hello World")); // 5
// console.log(lengthOfLastWord("a ")); // 1
console.log(lengthOfLastWord(" a ")); // 1
// console.log(lengthOfLastWord(""));  // 0
// console.log(lengthOfLastWord("        "));  // 0
// console.log(lengthOfLastWord("    day"));  // 3
