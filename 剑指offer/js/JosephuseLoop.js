function LastRemaining_Solution(n, m)
{
    if (n < 0)
        return -1;

    const dummyHead = new CircularList(0);
    let curChild = null;
    let preChild = dummyHead;
    
    for (let i = 1; i < n; i ++) {
        curChild = new CircularList(i);
        curChild.pre = preChild;
        preChild.next = curChild;
        preChild = curChild;
    }
    curChild.next = dummyHead;
    dummyHead.pre = curChild;

    curChild = dummyHead;

    while (curChild.next !== curChild) {
        for(let j = 1; j < m - 1; j++) {
            curChild = curChild.next;
        }
        curChild.pre.next = curChild.next;
        curChild.next.pre = curChild.pre;
        curChild = curChild.next;
    }

    return curChild.value;
}

// class CircularList {
//     constructor(v) {
//         this.value = v;
//         this.next = null;
//         this.pre = null;
//     }
// }

function CircularList(v) {
    this.value = v;
    this.next = null;
    this.pre = null;
}

console.log(LastRemaining_Solution(5, 4));