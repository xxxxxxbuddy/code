const T = parseInt(readline());
const data = [];
for (let i = 0; i < T; i++) {
    data[i] = [];
    const params = readline().split(' ');
    for (const param of params) {
        data[i].push(parseInt(param));
    }
}
const res = [];

for (const arr of data) {
    let count = 0;
    while (arr[0] < arr[1]) {
        if (arr[0] + arr[2] >= arr[1]) {
            res.push(++count);
            break;
        } else {
            arr[2] *= arr[3];
            count++;
        }
    }
    count = 0;
}

for (const r of res) {
    print(r);
}