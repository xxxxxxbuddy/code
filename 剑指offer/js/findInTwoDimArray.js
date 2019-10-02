/**
 * @description 在一个二维数组中（每个一维数组的长度相同），
 *              每一行都按照从左到右递增的顺序排序，每一列
 *              都按照从上到下递增的顺序排序。请完成一个函数，
 *              输入这样的一个二维数组和一个整数，判断数组中
 *              是否含有该整数。
 * @param {number}  target
 * @param {number[]}   array
 */

function Find(target, array) {
    if (!array instanceof Array || array.length === 0)
        return false;

    let rows = array.length,
        cols = array[0].length,
        i = 0;
    while (i < cols && rows > 0) {
        if (array[rows - 1][i] === target) {
            return true;
        } else if (array[rows - 1][i] < target) {
            i++;
        } else {
            rows--;
        }

    }

    return false;
}

const target = 7;
const arr = [[1,2,8,9],[2,4,9,12],[4,7,10,13],[6,8,11,15]];

console.log(Find(target, arr));