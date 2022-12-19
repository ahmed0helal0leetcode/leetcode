/**
 * Definition for a singly-linked list.
 * class ListNode {
 *     public $val = 0;
 *     public $next = null;
 *     function __construct($val = 0, $next = null) {
 *         $this->val = $val;
 *         $this->next = $next;
 *     }
 * }
 */
class Solution
{

    /**
     * @param ListNode $head
     * @return Boolean
     */
    function isPalindrome($head)
    {
        $headarr = [];
        while ($head) {
            $headarr[] = $head->val;
            $head = $head->next;
        }

        $count = count($headarr);
        if ($count == 1) {
            return true;
        }
        $endLoopCondition = ceil($count / 2);

        if ($count % 2 != 0) {
            $endLoopCondition--;
        }
        for ($i = 0; $i < $endLoopCondition; $i++) {
            if ($headarr[$i] != $headarr[$count - 1 - $i]) {
                return false;
            }
        }
        return true;

    }
}
