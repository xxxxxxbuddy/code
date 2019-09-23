/**
 * 如何得到一个数据流中的中位数？如果从数据流中读出奇数个数值，
 * 那么中位数就是所有数值排序之后位于中间的数值。
 * 如果从数据流中读出偶数个数值，那么中位数就是所有数值排序之后中间两个数的平均值。
 * 我们使用Insert()方法读取数据流，使用GetMedian()方法获取当前读取数据的中位数。
 */


const arr = [];
function Insert(num)
{
    if (arr.length === 0) {
        arr.push(num);
        return;
    }
    let start = 0;
    let end = arr.length - 1;
    let mid = Math.ceil((start + end) / 2);
    const len = arr.length;
    while(start < mid && mid < end) {
        if (num < arr[mid]) {
            end = mid;
        } else if (num > arr[mid]) {
            start = mid;
        } else {
            arr.splice(mid, 0, num);
            break;
        }
        mid = Math.ceil((start + end) / 2);
    }
    if (len === arr.length) {
        arr.splice(mid, 0, num);
    }
}
function GetMedian(){
    if (arr.length % 2 === 0) {
        return (arr[arr.length / 2] + arr[arr.length / 2 - 1]) / 2;
    } else {
        return arr[Math.floor(arr.length / 2)];
    }
}

Insert(5);
console.log(arr, GetMedian());
Insert(2);
console.log(arr, GetMedian());
Insert(3);
console.log(arr, GetMedian());
Insert(4);
console.log(arr, GetMedian());
Insert(1);
console.log(arr, GetMedian());
Insert(6);
console.log(arr, GetMedian());