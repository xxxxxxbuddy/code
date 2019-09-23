/**
 * 题目描述：
       最近很多城市都搞起了垃圾分类，已知有一个小区有n堆垃圾需要丢弃，这些垃圾都打包了，我们并不知道这是什么垃圾，要知道有些垃圾如果丢在一起是会影响环境的。这个小区一共只有两辆垃圾车，出于合理负载的考量，要求两辆车必须装载相同数量的垃圾。我们希望在不影响环境的情况下，每次让垃圾车载走最多的垃圾。

       我们为垃圾袋标了号，分别是1-n，有m个约束，每个约束表示为“a b”，意思是第a堆垃圾与第b堆垃圾不能装在一辆垃圾车上。（每堆垃圾最多有两个约束条件）

        请问两辆垃圾车一次最多可以带走多少堆垃圾呢？

输入
输入第一行包含两个正整数n，m，表示共有n堆垃圾，m个约束条件。(1<=n,m<=500)

接下来有m行，每行有两个正整数，a，b，表示第a堆垃圾和第b堆垃圾不能放在一辆垃圾车上。(1<=a,b<=n)

输出
输出仅包含一个正整数，表示两辆垃圾车一次最多带走的垃圾的数量。


样例输入
5 2
1 4
3 4
样例输出
4
 */

const n = readInt();
const m = readInt();
const constraint = [];
let line = '';
while((line = read_line()) != '') {
    garbages = line.split(' ');
    if (constraint[garbages[0]]) {
        constraint[garbages[0]].push(garbages[1]);
    } else {
        constraint[garbages[0]] = [garbages[1]];
    }
    if (constraint[garbages[1]]) {
        constraint[garbages[1]].push(garbages[0]);
    } else {
        constraint[garbages[1]] = [garbages[0]];
    }
}

constraint.sort((a,b) => a.length -b.length);

const carA = [];
const carB = [];

let nums = 0;
let nullNums = 0;

for (let i = 1; i < constraint.length; i++) {
    if (!constraint[i]) {
        nullNums++;
        continue;
    }
    let canA = true;
    let canB = true;

    for (let j = 0; j < constraint[i].length; j++) {
        if (carA.includes(constraint[i][j])) {
            carA = false;
        }
        if (carB.includes(constraint[i][j])) {
            carB = false;
        }

        if (!carA && !carB) {
            break;
        }
    }

    if (canA) {
        if (canB) {
            if (carA.length < carB.length) {
                carA.push(i);
            } else {
                carB.push(i);
            }
        } else {
            carA.push(i);
        }
        nums++;
    } else if (canB) {
        carB.push(i);
        nums++;
    }
}
nums += nullNums;
print(nums % 2 === 0 ? nums : nums - 1);