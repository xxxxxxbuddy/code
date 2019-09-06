function ListNode(x){
    this.val = x;
    this.next = null;
}
function deleteDuplication(pHead)
{
    if (!pHead)    return pHead;
    const dummyHead = new ListNode(-1);
    dummyHead.next = pHead;
    let curHead = pHead;
    let linkedPointer = dummyHead;
    while (curHead && curHead.next) {
        if (curHead.next.val === curHead.val) {
            let val = curHead.val;
            while(curHead && curHead.val === val) {
                curHead = curHead.next;
            }
            linkedPointer.next = curHead;
        } else {
            linkedPointer = curHead;
            curHead = curHead.next;
        }
    }
    return dummyHead.next;
}

let pHead = new ListNode(1);
pHead.next = new ListNode(2);
pHead.next.next = new ListNode(2);
let newHead = deleteDuplication(pHead);
console.log(newHead);