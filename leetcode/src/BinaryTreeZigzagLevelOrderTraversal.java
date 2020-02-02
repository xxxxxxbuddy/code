import java.util.ArrayList;
import java.util.List;
import java.util.Stack;

public class BinaryTreeZigzagLevelOrderTraversal {
    public List<List<Integer>> zigzagLevelOrder(TreeNode root) {
        List res = new ArrayList();
        Stack<TreeNode> stack1 = new Stack<>();
        Stack<TreeNode> stack2 = new Stack<>();
        if (root == null) return res;
        stack1.push(root);
        TreeNode cur;
        while (!stack1.isEmpty() || !stack2.isEmpty()) {
            List floor = new ArrayList();
            if (!stack1.isEmpty()) {
                while (!stack1.isEmpty()) {
                    cur = stack1.pop();
                    floor.add(cur.val);
                    if (cur.left != null) {
                        stack2.push(cur.left);
                    }
                    if (cur.right != null) {
                        stack2.push(cur.right);
                    }
                }
            } else {
                while (!stack2.isEmpty()) {
                    cur = stack2.pop();
                    floor.add(cur.val);
                    if (cur.right != null) {
                        stack1.push(cur.right);
                    }
                    if (cur.left != null) {
                        stack1.push(cur.left);
                    }
                }
            }
            res.add(floor);
        }
        return res;
    }
}
