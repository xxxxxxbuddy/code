/**
 * @description 一只青蛙一次可以跳上1级台阶，也可以跳上2级。
 *              求该青蛙跳上一个n级的台阶总共有多少种跳法（先后次序不同算不同的结果）。
 * @param {number} number
 * @returns {number} count
 */
function jumpFloor(number) {
    if (number <= 3)    return number;
    let pre = 2,
        cur = 3,
        i = 3;
    while (i < number) {
        cur += pre;
        pre = cur - pre;
        i++;
    }
    return cur;
}

 /* 递归
function jumpFloor(number)
{
    if (number <= 3)    return number;

    return jumpFloor(number - 1) + jumpFloor(number - 2);
}*/

console.log(jumpFloor(5));