public class IsBalanced_Solution {
    public static boolean Solution(TreeNode root) {
        if(root == null)
            return true;

        return TreeDepth(root) != -1;
    }

    private static int TreeDepth(TreeNode root) {
        if(root == null)
            return 0;

        int left = TreeDepth(root.left);
        if(left == -1)
            return -1;

        int right = TreeDepth(root.right);
        if(right == -1)
            return -1;

        return Math.abs(left - right) <= 1
                ? Math.max(left, right) + 1
                : -1;
    }

}
