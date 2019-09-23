const firstLine = readline();
const firstLineParmas = firstLine.split(' ');
const n = firstLineParmas[0];
const m = firstLineParmas[1];

if (n, m < 1 || n, m > 1000) {
    return false;
}

const staff = new Array(n * m);
for(var i = 0;i < n; i++){
    lines = readline().split(" ")
    for(var j = 0;j < lines.length; j++){
        staff.push(lines[j]);
    }
}

function func() {
    const m = n = 3;
    const staff = [1,2,3,4,5,6,7,8,9];

    let direction = 0; // 向下
    let row = 0;
    let col = 0;
    print (staff[row * m + col] + ' ');
    while (staff[row * m + col] !== null) {
        let tempDir = direction;
        switch (direction) {
            case 0: {
                if (row === n - 1) {
                    direction = 1; // 向右
                } else {
                    staff[row * m + col] = null;
                    row++;
                }
                break;
            };
            case 1: {
                if (col === m - 1) {
                    direction = 2; // 向上
                } else {
                    staff[row * m + col] = null;
                    col++;
                }
                break;
            };
            case 2: {
                if (row === 0) {
                    direction = 3; // 向左
                } else {
                    staff[row * m + col] = null;
                    row--;
                }
                break;
            };case 3: {
                if (col === 0) {
                    direction = 0; // 向下
                } else {
                    staff[row * m + col] = null;
                    col--;
                }
                break;
            };
        }
        if (tempDir !== direction) {
            continue;
        }
        if (staff[row * m + col] !== null) {
            print (staff[row * m + col] + ' ');
        }
    }
}


function print(msg) {
    console.log(msg);
}

let a = func();