public class $5_LongestPalindromicSubstring {
    /**
     * @param s
     * @return
     * @link https://leetcode-cn.com/problems/longest-palindromic-substring/
     * @description Given a string s, find the longest palindromic substring in s.
     * You may assume that the maximum length of s is 1000.
     * @example 1.  Input: "babad"
     * Output: "bab"
     * Note: "aba" is also a valid answer.
     * 2.  Input: "cbbd"
     * Output: "bb"
     */
    public String longestPalindrome(String s) {
        if (s.length() <= 1) return s;
        int len = s.length();
        int start = 0, end = 0;

        for (int i = 0; i < len; i++) {
            int len1 = expandAroundCenter(s, i, i);
            int len2 = expandAroundCenter(s, i, i + 1);
            int maxLen = Math.max(len1, len2);
            if (maxLen > end - start) {
                start = i - (maxLen - 1) / 2;
                end = i + maxLen / 2;
            }
        }
        return s.substring(start, end + 1);
    }

    private int expandAroundCenter(String s, int left, int right) {
        while (left >= 0 && right < s.length() && s.charAt(left) == s.charAt(right)) {
            left--;
            right++;
        }
        return right - left - 1;
    }
}
