class Solution:
    def maximumBags(self, capacity: List[int], rocks: List[int], additionalRocks: int) -> int:
        print(capacity)
        bagsAtFullCapacity=0
        needToFill=[]
        for i in range(len(capacity)):
            needToFill.append(capacity[i]-rocks[i])
        needToFill.sort()
        
        for i in range(len(needToFill)):
            additionalRocks = additionalRocks - needToFill[i]
            
            if additionalRocks < 0: 
                break
            else:
                bagsAtFullCapacity+=1
            
        return bagsAtFullCapacity