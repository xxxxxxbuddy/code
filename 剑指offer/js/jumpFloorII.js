/**
 * @description 一只青蛙一次可以跳上1级台阶，也可以跳上2级……它也可以跳上n级。
 *              求该青蛙跳上一个n级的台阶总共有多少种跳法。
 * @param {number} number
 * @returns {number} count
 */
function jumpFloorII(number)
{
    if (number <= 2)    return number;
    return jumpFloorII(number - 1) * 2;
}