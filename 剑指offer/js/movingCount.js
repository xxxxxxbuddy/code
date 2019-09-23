/**
 * 
 * 地上有一个m行和n列的方格。一个机器人从坐标0,0的格子开始移动，
 * 每一次只能向左，右，上，下四个方向移动一格，但是不能进入行坐标和列坐标的数位之和大于k的格子。 
 * 例如，当k为18时，机器人能够进入方格（35,37），因为3+5+3+7 = 18。但是，它不能进入方格（35,38），
 * 因为3+5+3+8 = 19。请问该机器人能够达到多少个格子？
 */
function movingCount(threshold, rows, cols)
{
    if (threshold <= 0 || rows <= 0 || cols <= 0) return 0;

    const flagMatrix = new Array(rows * cols).fill(false);
    const res = movingCountHelper(threshold, rows, cols, 0, 0, flagMatrix);
    return res;
}

function movingCountHelper(threshold, rows, cols, row, col, flagMatrix) {
    let count = 0;
    if (row >= 0 && row < rows && col >= 0 && col < cols &&
        !flagMatrix[row * cols + col] && thresholdSum(row, col) <= threshold) {
        flagMatrix[row * cols + col] = true;
        count = 1 + movingCountHelper(threshold, rows, cols, row + 1, col, flagMatrix) +
            movingCountHelper(threshold, rows, cols, row - 1, col, flagMatrix) +
            movingCountHelper(threshold, rows, cols, row, col + 1, flagMatrix) +
            movingCountHelper(threshold, rows, cols, row, col - 1, flagMatrix);
    }
    return count;
}

function thresholdSum(row, col) {
    let sum = 0;
    while (row > 0) {
        sum += row % 10;
        row = Math.floor(row / 10);
    }
    while (col > 0) {
        sum += col % 10;
        col = Math.floor(col / 10);
    }
    return sum;
}
console.log(movingCount(5, 10, 10));