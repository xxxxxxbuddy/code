// const firstLine = readline().split(' ');
// const n = parseInt(firstLine[0]);
// const m = parseInt(firstLine[1]);
// const arr = readline().split(' ');
// const constraint = [];
// for(var i = 0;i < m; i++){
//     lines = readline().split(" ")
//     let first = parseInt(lines[0]);
//     let second = parseInt(lines[1]);
//     constraint[first] = second;
// }
const n = 4, m = 2;
const arr = [1,3,2,4];
const constraint = [,,4,2]

let res = 0;
let range = 1;
let last = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (constraint[last] && arr[i] === constraint[last]){
        res += getRangeNum(range);
        range = 1;
    } else {
        range++;
    }
    last = arr[i];
}

if (range > 0) {
    res += getRangeNum(range);
}
console.log(res);

function getRangeNum(n) {
    return n * (n + 1) / 2;
}