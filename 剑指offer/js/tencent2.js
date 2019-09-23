const line = readline();
params = line.split(' ');
const year = parseInt(params[0]);
const month = parseInt(params[1]);
const day = parseInt(params[2]);

let isDistinct = false;
if ((year %4 === 0 && year % 100 !== 0) || year % 400 === 0 || (year % 3200 === 0 && year % 172800 === 0)) {
    isDistinct = true;
}

const is31 = [1, 3, 5, 7, 8, 10, 12];
const is30 = [4, 6, 9, 11];
let newYear,newMonth,newDay;
if (day >= 29) {
    if (day === 29 && month === 2 && !isDistinct) {
        newDay = day - 28;
        let {
            newYear: year,
            newMonth: month,
        } = execNewDate(year, month);
    } else if (day === 31 && (is30.includes(month) || month === 2)) {
        if (month === 2) {
            if (isDistinct) newDay = 2;
            else newDay = 3;
        } else {
            newDay = 1;
        }
        let {
            newYear: year,
            newMonth: month,
        } = execNewDate(year, month);
    }
}

if (newMonth <=9 ) {
    newMonth = handleFormat(newMonth);
} 
if (newDay <= 9) {
    newMonth = handleFormat(newDay);
}
print(`${year}-${newMonth}-${newDay}`);

function execNewDate(year, month) {
    if (month === 12) {
        year++;
        month = 1;
    } else {
        month++;
    }
    return {
        year: year,
        month: month,
    }
}

function handleFormat(n) {
    return '0' + n;
}