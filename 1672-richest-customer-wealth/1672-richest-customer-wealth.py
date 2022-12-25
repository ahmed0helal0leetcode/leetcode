class Solution:
    def maximumWealth(self, accounts: List[List[int]]) -> int:
        for i in range(len(accounts)):
            sum=0
            for j in range(len(accounts[i])):
                sum+=accounts[i][j]
            if i==0:
                maxWealth=sum
            if sum> maxWealth:
                maxWealth=sum
        return maxWealth