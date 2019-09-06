import java.util.ArrayList;

public class FindContinuousSequence {
    public static ArrayList<ArrayList<Integer>> Solution(int sum) {
        ArrayList<ArrayList<Integer>> res = new ArrayList<>();
        ArrayList<Integer> tempArr = new ArrayList<>();
        int tempSum = 0;
        int i = 1;
        while (i <= (sum / 2) + 2) {
            if (tempSum == sum) {
                res.add(new ArrayList<>(tempArr));
                tempSum -= tempArr.get(0);
                tempArr.remove(0);
            }

            while (tempSum < sum) {
                tempSum += i;
                tempArr.add(i++);
            }

            while (tempSum > sum) {
                tempSum -= tempArr.remove(0);
            }
        }

        return res;
    }
}
