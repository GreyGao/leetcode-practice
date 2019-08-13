/**
 * You are climbing a stair case. It takes n steps to reach to the top.

 Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

 Note: Given n will be a positive integer.

 Example 1:

 Input: 2
 Output: 2
 Explanation: There are two ways to climb to the top.
 1. 1 step + 1 step
 2. 2 steps
 Example 2:

 Input: 3
 Output: 3
 Explanation: There are three ways to climb to the top.
 1. 1 step + 1 step + 1 step
 2. 1 step + 2 steps
 3. 2 steps + 1 step

 思路：
 1. 使用归纳总结现象的方式找到规律：
    0个台阶 -> 1种
    1个台阶 -> 1种
    2个台阶 -> 2种（1次2步，2次一步）
    3个台阶 -> 3种（1次2步，1次1步、3次1步、1次1步，1次2步）
    4个台阶 -> 5种
 2. 抽象理解
    由于每次可以爬`1阶楼梯`, 也可以爬`2阶楼梯`
    - 从n-1爬1阶到n层  if(n===0) return 1;
    - 从n-2爬2阶到n层
    所以 f(n) = f(n-2) + f(n-1)
 */

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  // f(n) = f(n-1) + f(n-2)
  // n>=2 begin cycle
  if(n===0) return 1;
  if(n===1) return 1;

  let current = 1;
  let first = 1;
  let second = 1;


  for(let i=2; i<=n; i++){
    // 记录当前位
    current = first + second;

    // 其他向前1位
    first = second;
    second = current;
  }
  return current;
};

console.log(climbStairs(44)); // 2
console.log(climbStairs(3)); // 3
console.log(climbStairs(4)); // 5
console.log(climbStairs(5)); // 8