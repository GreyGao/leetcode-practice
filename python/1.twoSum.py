"""
1. 两数之和

给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。

示例:
给定 nums = [2, 7, 11, 15], target = 9
因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]
"""

# For循环
class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        result = []
        for i in range(len(nums)):
            print('--------i loop--------', nums[i])
            for j in range(len(nums[i + 1:])):
                print('j loop', nums[i+j+1])
                if nums[i] + nums[i+j+1] == target:
                    result.append(i)
                    result.append(i+j+1)
                    break
            else:
                continue
            break
        print(result)
        return result

# Map
class Solution2(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        result = []
        dic = {}
        for i in range(len(nums)):
          print('--------i loop--------', nums[i])
          if target - nums[i] in dic:
            result.append(dic[target - nums[i]])
            result.append(i)
            break;
          dic[nums[i]] = i
        print(result)
        return result




# TEST
solution = Solution2()
solution.twoSum([2, 7, 11, 15], 9)
solution.twoSum([2, 5, 5, 11], 10)

# 执行用时：24 ms, 在所有 Python 提交中击败了92.31%的用户
# 内存消耗：13.6 MB, 在所有 Python 提交中击败了24.04%的用户