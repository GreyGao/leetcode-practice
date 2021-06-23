/**
 Given two strings s and t, determine if they are isomorphic.

 Two strings are isomorphic if the characters in s can be replaced to get t.

 All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character but a character may map to itself.

 Example 1:

 Input: s = "egg", t = "add"
 Output: true
 Example 2:

 Input: s = "foo", t = "bar"
 Output: false
 Example 3:

 Input: s = "paper", t = "title"
 Output: true
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  if(!s && !t) return true;
  if(!s || !t) return false;
  if(s.length !== t.length) return false;
  if(s===t) return true;

  const map = {}

  for(let i=0; i< s.length; i++) {
    const charS = 's' + s[i];
    const charT = 't' + t[i];
    if(!map[charS]){
      map[charS] = t[i];
    }
    if(!map[charT]){
      map[charT] = s[i];
    }
    if(s[i] !== map[charT] || t[i] !== map[charS]) return false;
  }
  return true;
};

// console.log(isIsomorphic('egg','add')); // true
// console.log(isIsomorphic('foo','bar')); // false
console.log(isIsomorphic('paper','title')); // true
