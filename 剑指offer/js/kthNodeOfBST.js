const { pRoot } = require("./templateBST.js");
function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}

/**
 * 给定一棵二叉搜索树，请找出其中的第k小的结点
 * 例如（5，3，7，2，4，6，8）中，按结点数值大小顺序第三小结点的值为4
 */

 /************************/

 /**
  * 
  * 中序遍历即为从小到大排序，采用非递归方式
  */
function KthNode(p, k) {
    if (!p || k <= 0)   return null;
    const stack = [];
    const arr = [];
    while(p !== null || stack.length > 0) {
        while(p !== null) {
            stack.push(p);
            p = p.left;
        }
        if (stack.length > 0) {
            p = stack.pop();
            arr.push(p);
            p = p.right;
        }
    }
    return arr.length >= k ? arr[k - 1] : null;
}

console.log(KthNode(pRoot, 1));