/**
 * 时间限制：C/C++语言 1000MS；其他语言 3000MS
内存限制：C/C++语言 65536KB；其他语言 589824KB
题目描述：
沿着长N米、宽1米的走廊，连续铺有N块边长为1米的正方形地砖。假设所有颜色分为26种，用小写字母a到z表示，给定N块地砖的初始颜色，每次可以选择一种颜色，然后将最多M块连续的地砖染成该颜色。那么至少要进行多少次染色，才能将所有地砖染成同一颜色？

输入
第一行输入两个整数N和M，1≤M≤N≤104。

第二行输入由N个小写字母组成的字符串，描述N块地砖的初始颜色，相邻的两个小写字母代表相邻的两块地砖。
 */

const n = readInt();
const m = readInt();
let str = '';
while((line = read_line()) != '') {
    str = line;
}
squares = str.split('');

let minTimes = Number.MAX_SAFE_INTEGER;
const flag = {};

for (let i = 0; i < n; i++) {
    const letter = squares[i];
    if (flag[letter]) {
        continue;
    } else {
        flag[letter] = 1;
    }

    let count = 0;
    for (let j = 0; j < n; j++) {
        while (squares[j] === letter) {
            j++;
        }
        count++;
        j += m;
    }
    if (minTimes > count) {
        minTimes = count;
    }
}

print(minTimes);