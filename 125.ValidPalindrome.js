/**
 Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

 Note: For the purpose of this problem, we define empty string as valid palindrome.

 Example 1:

 Input: "A man, a plan, a canal: Panama"
 Output: true
 Example 2:

 Input: "race a car"
 Output: false
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  const result = s.toLocaleLowerCase().replace(/[^0-9a-z]/gi,'');
  return result === result.split('').reverse().join('');
};

console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car")); // false
console.log(isPalindrome("0P")); // false

