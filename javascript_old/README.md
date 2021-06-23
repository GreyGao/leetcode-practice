# Javascript LeetCode Practice
> 使用Javascript进行leetcode全题解



### 一阶段目标

完成`esay`难度下所有非锁定题目的题解



### 说明

后续已逐步开始加入解题的思路，以及耗时、内存占用等提交结果后的反馈，提高每道题的可阅读性，并尝试更好的解法。

```javascript
var findTheDifference = function (s, t) {
  /**
   * 思路：
   * 建立一个s的map，每保存一位数，则value + 1
   * 遍历t，每走一位，则value - 1
   * 寻找value为0或key不存在的那位数，终止循环
   * Runtime: 52 ms, faster than 95.92% of JavaScript online submissions for Find the Difference.
   * Memory Usage: 35.9 MB, less than 100.00% of JavaScript online submissions for Find the Difference.
   * */

  const map = {};
  for (const m of s) {
    map[m] = map[m] ? map[m] + 1 : 1;
  }
  for (const n of t) {
    if(!map[n]) return n;
    map[n] -= 1;
  }

  return '';
};
```



