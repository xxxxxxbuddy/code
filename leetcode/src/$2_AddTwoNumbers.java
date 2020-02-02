/**
 * Definition for singly-linked list.
 * public class ListNode {
 * int val;
 * ListNode next;
 * ListNode(int x) { val = x; }
 * }
 */
public class $2_AddTwoNumbers {
    /**
     * @param l1
     * @param l2
     * @return
     * @link https://leetcode-cn.com/problems/add-two-numbers/
     * You are given two non-empty linked lists representing two non-negative integers.
     * The digits are stored in reverse order and each of their nodes contain a single digit.
     * Add the two numbers and return it as a linked list.
     * <p>
     * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
     * @example Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
     * Output: 7 -> 0 -> 8
     * Explanation: 342 + 465 = 807.
     */
    public static ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        ListNode pHead = new ListNode(0);
        ListNode p = l1, q = l2, cur = pHead;
        int carry = 0;
        while (p != null || q != null) {
            int temp = (p != null ? p.val : 0) + (q != null ? q.val : 0) + carry;
            carry = temp / 10;
            cur.next = new ListNode(temp % 10);
            cur = cur.next;
            if (p != null) p = p.next;
            if (q != null) q = q.next;
        }

        if (carry > 0) {
            cur.next = new ListNode(1);
        }
        return pHead.next;
    }
}
