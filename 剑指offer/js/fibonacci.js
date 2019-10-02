/**
 * @description 要求输入一个整数n，请你输出斐波那契数列的第n项（从0开始，第0项为0）。n<=39
 * @param {number} n
 * @returns {number} nth
 */
function Fibonacci(n)
{
    if (n <= 1) return n;
    let pre = 0,
        cur = 1,
        i = 1;
    while (i < n) {
        cur += pre;
        pre = cur - pre;
        i++;
    }
    
    return cur;
}