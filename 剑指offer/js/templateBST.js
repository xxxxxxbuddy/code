function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
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

module.exports = {
    pRoot: p5,
}