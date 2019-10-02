/**
 * @description 输入某二叉树的前序遍历和中序遍历的结果，请重建出该二叉树。
 *              假设输入的前序遍历和中序遍历的结果中都不含重复的数字。例如
 *              输入前序遍历序列{1,2,4,7,3,5,6,8}和中序遍历序列{4,7,2,1,
 *              5,3,8,6}，则重建二叉树并返回。
 * @param {number[]} pre
 * @param {number[]} vin
 */
function reConstructBinaryTree(pre, vin)
{
    if (pre.length !== vin.length || pre.length === 0)  return false;

    return reConstructHelper(pre, vin);
}

function reConstructHelper(pre, vin) {
    const root = new TreeNode(pre[0]);
    const rootIndex = vin.indexOf(pre[0]);
    root.left = rootIndex === 0 ? null : reConstructHelper(pre.slice(1, rootIndex + 1), vin.slice(0, rootIndex));
    root.right = rootIndex === pre.length - 1 ? null : reConstructHelper(pre.slice(rootIndex + 1), vin.slice(rootIndex + 1));
    return root;
}

function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}

// const pre = [1,2,4,7,3,5,6,8];
// const vin = [4,7,2,1,5,3,8,6];
// let a = reConstructBinaryTree(pre, vin);
// debugger;