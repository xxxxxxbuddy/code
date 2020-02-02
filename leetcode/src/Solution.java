public class Solution {
    public static void main(String[] args) {
//        1.Two Sum
//            System.out.println($1_TwoSum.twoSum(new int[]{3,2,4},6));

//        2.Add Two Numbers
//        ListNode l1 = new ListNode(9);
//            l1.next = new ListNode(5);
//            l1.next.next = new ListNode(4);
//            l1.next.next.next = new ListNode(3);
//            ListNode l2 = new ListNode(5);
//            l2.next = new ListNode(6);
//            l2.next.next = new ListNode(4);
//            System.out.println($2_AddTwoNumbers.addTwoNumbers(l1, l2));

//        3.Length of longest substring without repeating characters
//            System.out.println($3_LongestSubstringWithoutRepeatingCharacters.lengthOfLongestSubstring("dvdf"));

//        4.Median of two sorted array
//            int a = 3;
//            System.out.println(a / 2);

//        5.Longest palindromic substring
//        $5_LongestPalindromicSubstring solution = new $5_LongestPalindromicSubstring();
//        System.out.println(solution.longestPalindrome("babad"));
//        6.Regular expression matching
//        System.out.println($6_RegularExpressionMatching.isMatch("mississippi", "mis*is*p*."));
//        $20_ValidParentheses su = new $20_ValidParentheses();
//        su.isValid("{[]}");

//        $42_TrappingRainWater su = new $42_TrappingRainWater();
//        System.out.println(su.trap(new int[]{2,1,0,2}));

        $71_SimplifyPath solution = new $71_SimplifyPath();
        System.out.println(solution.simplifyPath("/a//b////c/d//././/.."));
    }
}
