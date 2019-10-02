/**
 * @description 输入一个链表，按链表从尾到头的顺序返回一个ArrayList
 * @param {ListNode} head
 */


function printListFromTailToHead(head)
{
    if (!head)  return [];

    const res = [];
    while (head) {
        res.unshift(head.val);
        head = head.next;
    }
    return res;
}

function ListNode(x){
    this.val = x;
    this.next = null;
}