import java.util.Arrays;

public class Match {
    /**
     * @param str     original string
     * @param pattern regexp string
     * @return bool of matching
     * @link https://www.nowcoder.com/practice/45327ae22b7b413ea21df13ee7d6429c
     * 请实现一个函数用来匹配包括'.'和'*'的正则表达式。模式中的字符'.'表示任意一个字符，
     * 而'*'表示它前面的字符可以出现任意次（包含0次）。 在本题中，匹配是指字符串的所有字符匹配整个模式。
     * 例如，字符串"aaa"与模式"a.a"和"ab*ac*a"匹配，但是与"aa.a"和"ab*a"均不匹配
     */
    public static boolean match(char[] str, char[] pattern) {
        if (str.length == 0 && pattern.length == 0) {
            return true;
        } else if (str.length != 0 && pattern.length == 0) {
            return false;
        } else if (str.length == 0) {
            if (pattern.length > 1 && pattern[1] == '*') {
                return match(str, Arrays.copyOfRange(pattern, 2, pattern.length));
            } else {
                return false;
            }
        } else {
            if (pattern.length > 1 && pattern[1] == '*') {
                if (str[0] != pattern[0] && pattern[0] != '.') {
                    return match(str, Arrays.copyOfRange(pattern, 2, pattern.length));
                } else {
                    return match(str, Arrays.copyOfRange(pattern, 2, pattern.length)) ||
                            match(Arrays.copyOfRange(str, 1, str.length), Arrays.copyOfRange(pattern, 2, pattern.length)) ||
                            match(Arrays.copyOfRange(str, 1, str.length), pattern);
                }
            } else {
                if (str[0] == pattern[0] || pattern[0] == '.') {
                    return match(Arrays.copyOfRange(str, 1, str.length), Arrays.copyOfRange(pattern, 1, pattern.length));
                } else {
                    return false;
                }
            }
        }
    }
}
