public class LastRemainingChild {
    /**
     * @param n
     * @param m
     * @return The last remaining child;
     * @link https://www.nowcoder.com/practice/f78a359491e64a50bce2d89cff857eb6
     * 首先,让小朋友们围成一个大圈。然后,随机指定一个数m,让编号为0的小朋友开始报数。
     * 每次喊到m-1的那个小朋友要出列且不再回到圈中,从他的下一个小朋友开始,继续0...m-1报数,
     * 直到剩下最后一个小朋友(注：小朋友的编号是从0到n-1)
     * 如果没有小朋友，请返回-1
     */
    public static int LastRemaining_Solution(int n, int m) {
        if (n < 1 || m < 1) return -1;

        int[] arr = new int[n];

        int i = -1, count = n, step = 0;
        while (count > 0) {
            i++;
            if (i >= n) i = 0;
            if (arr[i] == -1) continue;
            step++;
            if (step == m) {
                step = 0;
                arr[i] = -1;
                count--;
            }
        }
        return i;
    }
}
