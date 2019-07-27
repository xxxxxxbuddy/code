//num1,num2分别为长度为1的数组。传出参数
//将num1[0],num2[0]设置为返回结果
public class FindNumsAppearOnce {
    public static void Solution(int [] array,int num1[] , int num2[]) {
        if (array == null || array.length <= 1)
            return;

        int xor = 0;
        for(int num : array) {
            xor ^= num;
        }

        xor ^= -xor;

        for(int num : array) {
            if((num & xor) == 0)
                num1[0] ^= num;
            else
                num2[0] ^= num;
        }

    }

}
