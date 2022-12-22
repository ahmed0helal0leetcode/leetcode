# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def middleNode(self, head: Optional[ListNode]) -> Optional[ListNode]:
        arr = []
        temp= head
        while temp:
          arr.append(temp.val)
          temp=temp.next
        count = len(arr)       
        for i in range(count//2):
            head=head.next
   
            
        return head