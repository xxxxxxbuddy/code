import java.util.HashMap;
import java.util.Map;

public class $3_LongestSubstringWithoutRepeatingCharacters {
    /**
     * @param s
     * @return
     * @link https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/
     * @description Given a string, find the length of the longest substring without repeating characters.
     * @example Input: "abcabcbb"
     * Output: 3
     * Explanation: The answer is "abc", with the length of 3.
     * Input: "bbbbb"
     * Output: 1
     * Explanation: The answer is "b", with the length of 1.
     * Input: "pwwkew"
     * Output: 3
     * Explanation: The answer is "wke", with the length of 3.
     * Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
     */
    public static int lengthOfLongestSubstring(String s) {
        if (s.length() <= 1) return s.length();

        Map<Character, Integer> map = new HashMap<>();
        int longest = 1;
        for (int j = 0, i = 0; j < s.length(); j++) {
            if (map.containsKey(s.charAt(j))) {
                i = Math.max(map.get(s.charAt(j)), i);
            }
            longest = Math.max(longest, j - i + 1);
            map.put(s.charAt(j), j + 1);
        }


        return longest;
    }
}
