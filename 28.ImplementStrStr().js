/**
 Implement strStr().
 Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
 */

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = (haystack, needle) => {
  if(needle==='') return 0;
  const first = needle[0];
  for(let i=0; i<haystack.length; i++){
    const char = haystack[i];
    if (char === first && haystack.slice(i,i+needle.length)===needle){
      return i;
    }
  }
  return -1;
};

console.log(strStr("hello","ll")); // 2
console.log(strStr("aaaaa","bba")); // -1
console.log(strStr("","")); // 0
