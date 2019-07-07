import java.util.ArrayList;
import java.util.Stack;

public class FindFirstCommonNode {
    /*
     * @description 方法一：利用ArrayList，智商含量较低。。
     */
    public static ListNode FindFirstCommonNode(ListNode pHead1, ListNode pHead2) {
        if(pHead1 == null || pHead2 == null)
            return null;

        ArrayList<ListNode> stack1 = new ArrayList<ListNode>();
        while(pHead1 != null) {
            stack1.add(pHead1);
            pHead1 = pHead1.next;
        }

        while(pHead2 != null) {
            if(stack1.contains(pHead2))
                return stack1.get(stack1.indexOf(pHead2));
            pHead2 = pHead2.next;
        }

        return null;
    }

    /**
     * @description 方法二： 利用两个栈，从尾部开始比较
     */
    public static ListNode FindFirstCommonNode2(ListNode pHead1, ListNode pHead2) {
        if(pHead1 == null || pHead2 == null)
            return null;

        Stack<ListNode> stack1 = new Stack<>();
        Stack<ListNode> stack2 = new Stack<>();
        while(pHead1 != null) {
            stack1.push(pHead1);
            pHead1 = pHead1.next;
        }
        while(pHead2 != null) {
            stack2.push(pHead2);
            pHead2 = pHead2.next;
        }

        ArrayList<ListNode> tempArr = new ArrayList<>();
        while(!stack1.isEmpty() && !stack2.isEmpty()) {
            tempArr.add(stack1.pop());
            if(tempArr.get(tempArr.size() - 1) != stack2.pop())
                return tempArr.size() == 1 ? null : tempArr.get(tempArr.size() - 2);
        }

        // 注意If中的最后一种情况！！ 即两个链表完全相同时
        if(!stack1.isEmpty() || !stack2.isEmpty() || (stack1.isEmpty() && stack2.isEmpty()))
            return tempArr.get(tempArr.size() - 1);
        else
            return null;
    }
}
