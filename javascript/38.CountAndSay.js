/**
 The count-and-say sequence is the sequence of integers with the first five terms as following:

 1.     1
 2.     11
 3.     21
 4.     1211
 5.     111221
 1 is read off as "one 1" or 11.
 11 is read off as "two 1s" or 21.
 21 is read off as "one 2, then one 1" or 1211.

 Given an integer n where 1 ≤ n ≤ 30, generate the nth term of the count-and-say sequence.

 Note: Each term of the sequence of integers will be represented as a string.
 */

/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  // count + num
  if(n===1) return "1";

  let i = 2;
  let result = '1'; //'21'
  while(i<=n){
    const stack = [];
    let prevChar = result[0];
    let count = 0;
    //
    for(let j=0; j<=result.length; j++){
      const char = result[j];
      const isLast = j===result.length;
      if(char === prevChar && !isLast){
        // 继续循环
        count++;
      }else{
        // 一次迭代结束，计入count+prevChar
        stack.push(count);
        stack.push(prevChar);
        // 如果不是最后一位，重置后继续计数
        if(!isLast){
          count = 1;
          prevChar = char;
        }
      }
    }
    result = stack.join('');

    i++;
  }
  return result;
};

// console.log(countAndSay(1)); // "1"
console.log(countAndSay(3)); // "21"
// console.log(countAndSay(4)); // "1211"
