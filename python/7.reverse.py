"""
7. 整数反转
给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。

示例 1:

输入: 123
输出: 321
 示例 2:

输入: -123
输出: -321
示例 3:

输入: 120
输出: 21
注意:

假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−2^31,  2^31 − 1]。请根据这个假设，如果反转后整数溢出那么就返回 0。
"""

import math


class Solution(object):
    def reverse(self, x):
        """
        :type x: int
        :rtype: int
        """
        if x == 0:
          return 0

        target = str(x)
        head = ''
        # print('-----input-----', target)
        if target[0] == '-' or target[0] == '+':
          head = target[0]
          target = target[1:]
        if target[-1] == '0':
          target = target[:-1]
        target = target[::-1]
        target = int(head + target)
        # print('-----result-----', int(target))  
        
        if math.pow(-2, 31) < target < math.pow(2, 31) -1:
          return target
        return 0



solution = Solution()
solution.reverse(123)
solution.reverse(-123)
solution.reverse(120)
solution.reverse(0)
print(solution.reverse(1534236469))

"""
执行用时：32 ms, 在所有 Python 提交中击败了53.51%的用户
内存消耗：12.6 MB, 在所有 Python 提交中击败了12.94%的用户

总结：
判断边界非常容易出错，做了很多次调试
"""