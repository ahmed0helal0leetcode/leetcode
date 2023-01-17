class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        n = len(nums)
        missingNumber=0
        for i in range(1,n+1):
            missingNumber=missingNumber^i
        missingNumber=missingNumber^nums[0]
        for i in range(1,n):
            missingNumber=missingNumber^nums[i]
        return missingNumber
        