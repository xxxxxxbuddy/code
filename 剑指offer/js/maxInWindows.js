/**
 * 给定一个数组和滑动窗口的大小，找出所有滑动窗口里数值的最大值。
 * 例如，如果输入数组{2,3,4,2,6,2,5,1}及滑动窗口的大小3，
 * 那么一共存在6个滑动窗口，他们的最大值分别为{4,4,6,6,6,5}；
 * 针对数组{2,3,4,2,6,2,5,1}的滑动窗口有以下6个： 
 * {[2,3,4],2,6,2,5,1}， {2,[3,4,2],6,2,5,1}，
 * {2,3,[4,2,6],2,5,1}， {2,3,4,[2,6,2],5,1}，
 * {2,3,4,2,[6,2,5],1}， {2,3,4,2,6,[2,5,1]}。
 */

 /***********************/
function maxInWindows(num, size)
{
    if (size === 0 || size > num.length)  return [];
    const res = [];
    // 找到第一个窗口内的最大值
    let biggest = findBiggest(num.slice(0, size));
    res.push(biggest);
    let i = size;
    while(i < num.length) {
        if (num[i] < num[i - size]) {
            if (num[i - size] < biggest) {
                i++;
            } else {
                biggest = findBiggest(num.slice(i - size + 1, ++i));
            }
            res.push(biggest);
        } else if (num[i] > num[i - size]){
            if (num[i] > biggest) {
                biggest = num[i];
            }
            i++;
            res.push(biggest);
        } else {
            res.push(biggest);
            i++;
        }
    }
    return res;
}

function findBiggest(arr) {
    const tempArr = arr.slice(0);
    tempArr.sort((a, b) => b - a);
    return tempArr[0];
}

const arr = [16,14,12,10,8,6,4];
console.log(maxInWindows(arr, 5));