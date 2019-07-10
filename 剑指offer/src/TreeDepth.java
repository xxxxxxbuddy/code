public class TreeDepth {
    public static int TreeDepth(TreeNode root) {
        if(root == null)
            return 0;
        return Solution(root, 1);
    }

    public static int Solution(TreeNode root, int depth) {

        int tempDepth = depth;
        if(root.left != null) {
            depth = Solution(root.left, tempDepth + 1);
        }

        if(root.right != null) {
            int temp = Solution(root.right, tempDepth + 1);
            depth = depth < temp ? temp : depth;
        }

        return depth;

    }
}
