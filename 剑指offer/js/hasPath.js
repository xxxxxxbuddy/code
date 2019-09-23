/**
 * 请设计一个函数，用来判断在一个矩阵中是否存在一条包含某字符串所有字符的路径。
 * 路径可以从矩阵中的任意一个格子开始，每一步可以在矩阵中向左，向右，向上，向下移动一个格子。
 * 如果一条路径经过了矩阵中的某一个格子，则该路径不能再进入该格子。
 * 例如 a b c e s f c s a d e e 矩阵中包含一条字符串"bcced"的路径，
 * 但是矩阵中不包含"abcb"路径，因为字符串的第一个字符b占据了矩阵中的第一行第二个格子之后，路径不能再次进入该格子。
 */
/**********/
function hasPath(matrix, rows, cols, path) {
    if ((matrix instanceof Array && matrix.length === 0) || rows === 0 || cols === 0)
        return false;
    if (path instanceof Array && path.length === 0)
        return true;
    var pathLength = 0;
    var flagMatrix = new Array(matrix.length).fill(false);
    for (var row = 0; row < rows; row++) {
        for (var col = 0; col < cols; col++) {
            if (hasPathCore(matrix, rows, cols, row, col, path, pathLength, flagMatrix)) {
                return true;
            }
        }
    }
    return false;
}
function hasPathCore(matrix, rows, cols, row, col, str, pathLength, flagMatrix) {
    if (str.length === pathLength)
        return true;
    var hasPathFlag = false;
    if (row >= 0 && row < rows && col >= 0 && col < cols &&
        matrix[row * cols + col] === str[pathLength] && !flagMatrix[row * cols + col]) {
        pathLength++;
        flagMatrix[row * cols + col] = true;
        hasPathFlag = hasPathCore(matrix, rows, cols, row - 1, col, str, pathLength, flagMatrix) ||
            hasPathCore(matrix, rows, cols, row + 1, col, str, pathLength, flagMatrix) ||
            hasPathCore(matrix, rows, cols, row, col - 1, str, pathLength, flagMatrix) ||
            hasPathCore(matrix, rows, cols, row, col + 1, str, pathLength, flagMatrix);
        if (!hasPathFlag) {
            flagMatrix[row * cols + col] = false;
            pathLength--;
        }
    }
    return hasPathFlag;
}
// "ABCESFCSADEE",3,4,"ABCCED"
console.log(hasPath("ABCESFCSADEE".split(''), 3, 4, "ABCCED".split('')));
