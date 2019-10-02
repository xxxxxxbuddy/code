/**
 * @description 把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。
 *              输入一个非递减排序的数组的一个旋转，输出旋转数组的最小元素。
 *              例如数组{3,4,5,1,2}为{1,2,3,4,5}的一个旋转，该数组的最小值为1。
 *              NOTE：给出的所有元素都大于0，若数组大小为0，请返回0。
 * @param {number[]} rotateArray
 * @returns {number} minNumber
 */
function minNumberInRotateArray(rotateArray) {
    /*  O(logn) */
    let left = 0,
        right = rotateArray.length - 1,
        mid = Math.floor(right / 2);
    while (left < right) {
        if (rotateArray[left] <= rotateArray[mid]) {
            left = mid;
        } else if (rotateArray[left] > rotateArray[mid]) {
            right = mid;
        }
        mid = Math.floor((left + right) / 2);
        if (mid === left) {
            return rotateArray[right];
        } else if (mid === right) {
            return rotateArray[left];
        }
    }
}

console.log(minNumberInRotateArray([3,4,0,1,1,2]));


 /* 时间复杂度O(n) 
 function minNumberInRotateArray(rotateArray)
{
    if (rotateArray.length === 0)   return 0;

    for (let i = 0; i < rotateArray.length - 1; i++) {
        if (rotateArray[i] > rotateArray[i + 1]) {
            return rotateArray[i + 1];
        }
    }

    return rotateArray[i];
}*/