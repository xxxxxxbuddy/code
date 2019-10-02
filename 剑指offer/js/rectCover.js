/**
 * @description 我们可以用2*1的小矩形横着或者竖着去覆盖更大的矩形。
 *              请问用n个2*1的小矩形无重叠地覆盖一个2*n的大矩形，总共有多少种方法？
 * @param {number} number
 * @returns {number} methods
 */
function rectCover(number)
{
    if (number <= 2)    return number;

    let pre = 1,
        cur = 2,
        i = 2;
    while (i < number) {
        cur += pre;
        pre = cur - pre;
        i++;
    }
    return cur;
}