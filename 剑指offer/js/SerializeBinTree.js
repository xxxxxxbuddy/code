/**
 * 请实现两个函数，分别用来序列化和反序列化二叉树
 * 二叉树的序列化是指：把一棵二叉树按照某种遍历方式的结果以某种格式保存为字符串，
 * 从而使得内存中建立起来的二叉树可以持久保存。序列化可以基于先序、中序、后序、层序的二叉树遍历方式来进行修改，
 * 序列化的结果是一个字符串，序列化时通过 某种符号表示空节点（#），以 ！ 表示一个结点值的结束（value!）。
 * 二叉树的反序列化是指：根据某种遍历顺序得到的序列化字符串结果str，重构二叉树。
 */
/** */
function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}
function Serialize(pRoot) {
    if (!pRoot) return '#!';
    const res = [];
    preTraverse(pRoot, res);
    return res.join('');
}

function Deserialize(s) {
    if (!s) return null;
    const arr = serializeStr2Arr(s);
    if (!(arr instanceof Array) || arr.length === 0)   return null;
    return deserializeHelper(arr);
}

function deserializeHelper (arr) {
    let val = arr.shift();
    if (val === '#')   return null;
    let node = new TreeNode(val);
    if (arr.length) {
        node.left = deserializeHelper(arr);
        node.right = deserializeHelper(arr);
    }
    return node;
}

function serializeStr2Arr(s) {
    const arr = [];
    if (!s)   return arr;
    let index = -1;
    while ((index = s.indexOf('!')) > -1) {
        let val = '';
        if (Number.isNaN(val = parseInt(s.slice(0, s.indexOf('!'))))) {
            arr.push('#');
            s = s.slice(index + 1);
            continue;
        }
        arr.push(val);
        s = s.slice(index + 1);
    }
    return arr;
}

function preTraverse(pRoot, arr) {
    if (pRoot) {
        arr.push(pRoot.val + '!')
    } else {
        arr.push('#!');
    }
    if (pRoot.left) {
        preTraverse(pRoot.left, arr);
    } else {
        arr.push('#!');
    }
    if (pRoot.right) {
        preTraverse(pRoot.right, arr);
    } else {
        arr.push('#!');
    }
    return arr;
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

const serializeStr = Serialize(p5)
const deserializeTree = Deserialize(serializeStr);
console.log('done');