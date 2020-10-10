import math
"""
判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。

示例 1:
输入: 121
输出: true

示例 2:
输入: -121
输出: false
解释: 从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。

示例 3:
输入: 10
输出: false
解释: 从右向左读, 为 01 。因此它不是一个回文数。

进阶:
你能不将整数转为字符串来解决这个问题吗？
"""


class Solution(object):
  def isPalindrome(self, x):
        """
        :type x: int
        :rtype: bool
        """
        if x == 0:
            return True
        if x < 0:
            return False
        xStr = str(x)
        return xStr[::-1] == xStr


class Solution2(object):
    def isPalindrome(self, x):
        if x == 0:
            return True
        if x < 0:
            return False

        result = True
        xStr = str(x)
        for i in range(math.ceil(len(xStr) / 2)):
            # print(xStr[i], xStr[-i - 1])
            if xStr[i] != xStr[-i - 1]:
                result = False
                break
        return result

"""
执行用时：76 ms, 在所有 Python3 提交中击败了89.11%的用户
内存消耗：13.4 MB, 在所有 Python3 提交中击败了61.72%的用户
"""

print('------TEST------')
solution = Solution2()
print(solution.isPalindrome(1234321))
print(solution.isPalindrome(-121))
print(solution.isPalindrome(10))
