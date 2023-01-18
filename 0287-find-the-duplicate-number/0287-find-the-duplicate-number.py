class Solution:
    def findDuplicate(self, nums: List[int]) -> int:
        count=len(nums)
        index=nums[0]
        nums[0]*=-1
        for i in range(1,count):
            index=abs(nums[index])     
            if nums[index] == abs(nums[0]):
                return abs(nums[0])
            elif nums[index]<0:
                return index
            else:
                nums[index]*=-1
            
            
        
