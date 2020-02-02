import java.util.Comparator;
import java.util.PriorityQueue;

public class $23_MergeSortedLists {
//    public ListNode mergeKLists(ListNode[] lists) {
//        int n = lists.length;
//        if (n == 0) return null;
//        return merge(0, n - 1, lists);
//    }
//
//    private ListNode merge(int left, int right, ListNode[] lists) {
//        if (left == right)  return lists[left];
//        int mid = (left + right) >> 1;
//        ListNode l1 = merge(left, mid, lists);
//        ListNode l2 = merge(mid + 1, right, lists);
//        return mergeHelper(l1, l2, lists);
//    }
//
//    private ListNode mergeHelper(ListNode l1, ListNode l2, ListNode[] lists) {
//        if (l1 == null) return l2;
//        if (l2 == null) return l1;
//        if (l1.val <= l2.val) {
//            l1.next = mergeHelper(l1.next, l2, lists);
//            return l1;
//        } else {
//            l2.next = mergeHelper(l1, l2.next, lists);
//            return l2;
//        }
//    }

    public ListNode mergeLists(ListNode[] lists) {
        if (lists == null || lists.length == 0) return null;

        PriorityQueue<ListNode> queue = new PriorityQueue<>(lists.length, new Comparator<ListNode>() {
            @Override
            public int compare(ListNode l1, ListNode l2) {
                if (l1.val < l2.val) return -1;
                else if (l1.val == l2.val) return 0;
                else return 1;
            }
        });
        ListNode dummyHead = new ListNode(0);
        ListNode p = dummyHead;
        for (ListNode l : lists) {
            if (l != null) {
                queue.add(l);
            }
        }
        while (!queue.isEmpty()) {
            p.next = queue.poll();
            p = p.next;
        }
        return dummyHead.next;
    }
}
