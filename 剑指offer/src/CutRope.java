public class CutRope {
    /**
     * @param target length of rope
     * @return product of ropes' length
     * @link https://www.nowcoder.com/practice/57d85990ba5b440ab888fc72b0751bf8
     * 给你一根长度为n的绳子，请把绳子剪成m段（m、n都是整数，n>1并且m>1），
     * 每段绳子的长度记为k[0],k[1],...,k[m]。请问k[0]xk[1]x...xk[m]可能的最大乘积是多少？
     * 例如，当绳子的长度是8时，我们把它剪成长度分别为2、3、3的三段，此时得到的最大乘积是18。
     */
    public static int cutRope(int target) {
        if (target <= 3) return target - 1;
        if (target == 4) return 4;

        int res = 1;
        while (target > 3) {
            res *= 3;
            target -= 3;
        }
        res *= target;
        return res;
    }
}
