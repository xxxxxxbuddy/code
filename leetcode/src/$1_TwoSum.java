import java.util.HashMap;
import java.util.Map;

public class $1_TwoSum {
    /**
     * @param nums
     * @param target
     * @return
     * @link https://leetcode-cn.com/problems/two-sum/
     * 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那两个整数，并返回他们的数组下标。
     * 你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。
     * @example 给定 nums = [2, 7, 11, 15], target = 9
     * 因为 nums[0] + nums[1] = 2 + 7 = 9
     * 所以返回 [0, 1]
     */
    public static int[] twoSum(int[] nums, int target) {
        /**
         * 遍历两遍哈希表
         * 时间复杂度O(n)
         * 空间复杂度O(n)
         *
         Map<Integer, Integer> hm = new HashMap<Integer, Integer>();
         for (int i = 0; i < nums.length; i++) {
         hm.put(nums[i], i);
         }
         for (int j = 0; j < nums.length; j++) {
         if (hm.containsKey(target - nums[j]) && hm.get(target - nums[j]) != j) {
         return new int[]{j, hm.get(target - nums[j])};
         }
         }
         return new int[]{};
         */
        /**
         * 遍历一遍哈希表
         * 时间复杂度O(n)
         * 空间复杂度O(n)
         */
        Map<Integer, Integer> hm = new HashMap<Integer, Integer>();
        for (int i = 0; i < nums.length; i++) {
            if (hm.containsKey(target - nums[i]) && hm.get(target - nums[i]) != i) {
                return new int[]{hm.get(target - nums[i]), i};
            }
            hm.put(nums[i], i);
        }
        return new int[]{};
    }
}
