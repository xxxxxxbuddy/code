import java.util.Stack;

public class $42_TrappingRainWater {
    /**
     * @param height
     * @return
     * @link https://leetcode-cn.com/problems/trapping-rain-water/
     */
    public int trap(int[] height) {
        Stack<Integer> stack = new Stack<>();
        int capacity = 0;
        int current = 0;
        while (current < height.length) {
            while (!stack.isEmpty() && height[current] > height[stack.peek()]) {
                int h = height[stack.pop()];
                if (stack.isEmpty()) break;
                int distance = current - stack.peek() - 1;
                int min = Math.min(height[current], height[stack.peek()]);
                capacity = capacity + distance * (min - h);
            }
            stack.push(current++);
        }

        return capacity;
    }
}
