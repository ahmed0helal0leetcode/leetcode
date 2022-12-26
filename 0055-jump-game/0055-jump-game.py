class Solution:
    def canJump(self, nums: List[int]) -> bool:
        count=len(nums)
        goal = count-1
        for i in range(count-2,-1,-1):
            if i+nums[i]>=goal: 
                goal=i
        if goal == 0 :
            return True
        else:
            return False

        