// const T = parseInt(readline());
// const data = [];
// for (let i = 0; i < T; i++) {
//     data[i] = [];
//     let params = readline().split(' ');
//     data[i][0] = parseInt(params[0]);
//     data[i][1] = parseInt(params[1]);
//     data[i][2] = [];
//     params = readline().split(' ');
//     for (let j = 0; j < data[i][0]; j++) {
//         data[i][2].push(parseInt(params[j]));
//     }
// }
const data = [[5,3,[2,2,3,3,1]]]

const res = [];
for (const arr of data) {
    let handled = false;
    for (let i = 0; i < arr[2].length - 1; i++) {
        if (arr[2][i] < arr[2][i + 1]) {
           if (!handled && ((i > 0 && arr[2][i] > arr[2][i - 1] + 1) || i === 0 && arr[2][i] > 0)) {
                arr[1]++;   // 拿一块
                arr[2][i]--;
           }
           handled = false;
        } else if (arr[2][i] > arr[2][i + 1]) {
            if (arr[2][i] === arr[2][i + 1] + 1 && !handled) {
                arr[2][i]--;
                arr[2][i + 1]++;
            } else {
                res.push('NO');
                break;
            }
        } else {
            if (arr[2][i] > 0 && !handled) {
                if ((i > 0 && arr[2][i] > arr[2][i - 1] + 1) || i === 0 && arr[2][i] > 0) {
                    arr[1]++;   // 拿一块
                    arr[2][i]--;
               } else {
                    if (arr[1] > 0) {
                        arr[1]--;
                        arr[2][i + 1]++;
                        handled = true;
                    } else {
                        res.push('NO');
                        break;
                    }
               }
            } else {
                if (arr[1] > 0) {
                    arr[1]--;
                    arr[2][i + 1]++;
                    handled = true;
                } else {
                    res.push('NO');
                    break;
                }
            }
        }

        if (i === arr[2].length - 2) {
            res.push('YES');
        }
    }
}

for (const r of res) {
    print(r);
}