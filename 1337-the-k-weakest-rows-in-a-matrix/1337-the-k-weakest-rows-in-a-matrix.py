class Solution:
    def kWeakestRows(self, mat: List[List[int]], k: int) -> List[int]:
        theSolidersOfTheRows={} 
        for i in range(len(mat)):
            sum=0
            for j in range(len(mat[0])):
                sum+=mat[i][j]
            theSolidersOfTheRows[i]=sum
        print()
        theSolidersOfTheRowsSorted=dict(sorted(theSolidersOfTheRows.items(), key=lambda x:x[1]))
        output = list(theSolidersOfTheRowsSorted.keys())[0:k]       
            
        return output
