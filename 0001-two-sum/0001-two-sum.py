class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        output=[]
        for num in nums:
            toFind=target-num
            try:
                index1=nums.index(num)   
                index2=nums.index(toFind,index1+1)
                if index1 != index2:
                    output.append(index1)
                    output.append(index2)
                    break
            except ValueError:
                continue
        return output
