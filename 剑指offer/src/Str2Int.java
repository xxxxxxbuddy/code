public class Str2Int {
    /**
     * @param str original string
     * @return number
     * @link https://www.nowcoder.com/practice/1277c681251b4372bdef344468e4f26e
     * 将一个字符串转换成一个整数，要求不能使用字符串转换整数的库函数。
     * 数值为0或者字符串不是一个合法的数值则返回0
     */
    public static int StrToInt(String str) {
        if (str == null || str.trim().equals("")) return 0;
        int symbol = 0;                     // 0 represent positive, 1 represent negative
        char[] chars = str.trim().toCharArray();
        int start = 0;
        long result = 0;
        if (chars[0] == '-') {
            symbol = 1;
            start = 1;
        } else if (chars[0] == '+') {
            start = 1;
        }
        for (int i = start; i < chars.length; i++) {
            if (chars[i] > '9' || chars[i] < '0')
                return 0;
            long sum = result * 10 + chars[i] - '0';

            // 判断是否溢出
            if ((symbol == 0 && sum > Integer.MAX_VALUE) || (-sum < Integer.MIN_VALUE) && symbol == 1)
                return 0;

            result = result * 10 + chars[i] - '0';
        }
        result = (int) Math.pow(-1, symbol) * result;
        return (int) result;
    }
}
