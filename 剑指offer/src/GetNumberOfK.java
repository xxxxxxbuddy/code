public class GetNumberOfK {
    public static int Solution(int[] array, int k) {
        if(array.length <= 0)
            return 0;

        // 二分查找
        // 默认升序
        // boolean desc = array[0] > array[array.length - 1] ? true : false;
//        int start = 0,
//                end = array.length - 1;
//        int middle = (start + end) / 2;
//        if(desc) {
//            while(start < end && array[middle] != k) {
//                middle = (start + end) / 2;
//                if(k > array[middle])
//                    end = middle - 1;
//                else
//                    start = middle + 1;
//            }
//        } else {
//            while(start < end && array[middle] != k) {
//                middle = (start + end) / 2;
//                if(k > array[middle])
//                    start = middle + 1;
//                else
//                    end = middle - 1;
//            }
//        }
//
//        此处做法实际复杂度仍是O(n)  应该为继续二分查找，以提高到logn
//        int count = 0;
//        if(array[middle] == k) {
//            int index = middle;
//            count++;
//            while((array.length > middle + 1) && array[++middle] == k)
//                count++;
//            while((index - 1 >= 0 ) && array[--index] == k)
//                count++;
//        }
//        return count;

        // 剑指offer
//        int first = GetFirstOfK(array, k, 0, array.length - 1);
//        int last = GetLastOfK(array, k, 0, array.length - 1);
//
//        if(first != -1 && last != -1)
//            return last - first + 1;
//
//        return 0;


        // 方法三：通过二分查找定位k + 0.5及k - 0.5应处的位置
        int start = biSearch(array, k - 0.5, 0, array.length - 1);
        int end = biSearch(array, k + 0.5, 0, array.length - 1);
        return end - start;

    }

//    private static int GetFirstOfK(int[] array, int k, int start, int end) {
//        if(start > end)
//            return -1;
//
//        int middle = (start + end) >> 1;
//
//        if(array[middle] > k) {
//            return GetFirstOfK(array, k, start, middle - 1);
//        } else if (array[middle] < k) {
//            return GetFirstOfK(array, k, middle + 1, end);
//        } else if(middle - 1 >= 0 && array[middle - 1] == k){
//            return GetFirstOfK(array, k, start, middle - 1);
//        } else {
//            return middle;
//        }
//    }
//
//    private static int GetLastOfK(int[] array, int k, int start, int end) {
//        if(start > end)
//            return -1;
//        int middle = (start + end) >> 1;
//
//        if(array[middle] > k) {
//            return GetLastOfK(array, k, start, middle - 1);
//        } else if (array[middle] < k) {
//            return GetLastOfK(array, k, middle + 1, end);
//        } else if(middle + 1 <= end && array[middle + 1] == k){
//            return GetLastOfK(array, k, middle + 1, end);
//        } else {
//            return middle;
//        }
//    }

    private static int biSearch(int[] array, double k, int start, int end) {
        while(start <= end) {
            int mid = (start + end) >> 1;
            if(array[mid] < k) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
        return start;
    }
}
