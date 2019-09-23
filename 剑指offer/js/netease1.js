const T = parseInt(readline());
const x = [];
for (let i = 0; i < T; i++) {
    x.push(parseInt(readline()));
}

function S(n) {
    if (n < 10) {
        return n;
    }
    let res = 0;
    while(n !== 0) {
        res += n % 10;
        n = Math.floor(n / 10);
    }
    return res;
}

const res = [];

for (const num of x) {
    if (num < 10) {
        res.push(num);
    } else {
        let first = Math.floor(num / 10);
        while ((Math.floor(first / 10)) !== 0) {
            first = Math.floor(first / 10);
        }
        const pow = Math.floor(num / 10);
        let n = first * Math.pow(10, pow);

        for (let i = 0; i < pow; i++) {
            n += 9 * Math.pow(10, i);
        }
        while (S(n) < num) {
            n += Math.pow(10, pow);
        }
        res.push(n);
    }   
    
}

for (const r of res) {
    print(r);
}