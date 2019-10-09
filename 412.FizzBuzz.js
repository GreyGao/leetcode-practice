/**
 Write a program that outputs the string representation of numbers from 1 to n.

 But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.

 Example:

 n = 15,

 Return:
 [
 "1",
 "2",
 "Fizz",
 "4",
 "Buzz",
 "Fizz",
 "7",
 "8",
 "Fizz",
 "Buzz",
 "11",
 "Fizz",
 "13",
 "14",
 "FizzBuzz"
 ]
 * */

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
  let i = 1;
  const result = [];
  while (i<=n) {
    let f = i % 3 === 0;
    let b = i % 5 === 0;
    if( f && b) {
      result.push('FizzBuzz');
    }else if(f){
      result.push('Fizz')
    }else if(b){
      result.push('Buzz')
    }else{
      result.push(`${i}`)
    }
    i++;
  }
  return result;
};
