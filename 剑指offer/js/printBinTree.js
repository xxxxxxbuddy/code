function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}
/**
 * @description “之”字型打印二叉树
 * @param {TreeNode} pRoot 
 */
function PrintReverse(pRoot)
{
    if (!pRoot)    return [];
    
    let direction = 0;
    const queue = [pRoot];
    const res = [];
    while (queue.length) {
        let i = queue.length;
        let tempArr = [];
        while (i > 0) {
            let cur = direction === 0 ? queue.pop() : queue.shift();
            tempArr.push(cur.val);
            i--;
            if (direction === 0) {
                if (cur.left)    queue.unshift(cur.left);
                if (cur.right)    queue.unshift(cur.right);
            } else {
                if (cur.right)    queue.push(cur.right);
                if (cur.left)    queue.push(cur.left);
            }
        }
        res.push(tempArr);
        direction = direction === 0 ? 1 : 0;
    }
    return res;
}

function printBinTree(pRoot) {
    if (!pRoot) return [];

    const queue = [pRoot];
    const res = [];
    while (queue.length) {
        let i = queue.length;
        let tempArr = [];
        while (i > 0) {
            let cur = queue.shift();
            i--;
            tempArr.push(cur.val);
            if (cur.left)   queue.push(cur.left);
            if (cur.right)  queue.push(cur.right);
        }
        res.push(tempArr);
    }
    return res;
}

const p1 = new TreeNode(1);
const p4 = new TreeNode(4);
const p3 = new TreeNode(3);
const p5 = new TreeNode(5);
const p6 = new TreeNode(6);
const p7 = new TreeNode(7);
const p8 = new TreeNode(8);

p5.left = p3;
p3.left = p1;
p3.right = p4;
p5.right = p7;
p7.left = p6;
p7.right = p8;

console.log(res = printBinTree(p5));