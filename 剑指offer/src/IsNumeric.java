import java.util.Arrays;

public class IsNumeric {
    /**
     * @param str original string
     * @return boolean of isNumeric
     * @link https://www.nowcoder.com/practice/6f8c901d091949a5837e24bb82a731f2
     * 请实现一个函数用来判断字符串是否表示数值（包括整数和小数）。
     * 例如，字符串"+100","5e2","-123","3.1416"和"-1E-16"都表示数值。
     * 但是"12e","1a3.14","1.2.3","+-5"和"12e+4.3"都不是。
     */
    public static boolean isNumeric(char[] str) {
        int i = 0,
                dotNum = 0;
        if (str.length == 0) {
            return false;
        } else if (str[0] == '+' || str[0] == '-') {
            ++i;
        } else if (str[0] == '.') {
            ++dotNum;
        }
        for (; i < str.length; i++) {
            if (str[i] == '.') {
                dotNum++;
                continue;
            }
            if (str[i] == 'e' || str[i] == 'E') {
                return isLegalExponent(Arrays.copyOfRange(str, i + 1, str.length)) && dotNum <= 1;
            }
            if (str[i] > '9' || str[i] < '0') return false;
        }

        if (dotNum > 1) return false;

        return true;
    }

    private static boolean isLegalExponent(char[] str) {
        int i = 0;
        if (str.length == 0) {
            return false;
        } else if (str[0] == '+' || str[0] == '-') {
            ++i;
        }

        for (; i < str.length; i++) {
            if (str[i] > '9' || str[i] < '0') return false;
        }
        return true;
    }
}
