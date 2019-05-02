/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    var res = [],
        x = y = 0,
        xStep = yStep = 0,
        len = s.length,
        i;
    if (numRows === 1) {
        return s;
    }
    for (i = 0; i < len; i++) {
        if (!res[x]) {
            res[x] = [];
        }
        res[x][y] = s[i];

        if (x < numRows - 1 && y % (numRows - 1) === 0) {
            xStep = 1;
            yStep = 0;
        } else {
            xStep = -1;
            yStep = 1;
        }
        x += xStep;
        y += yStep;
    }

    return res.reduce(function(result, item) {
        return result += item.filter(function(str) {
            return str !== undefined;
        }).join('');
    }, '');
};

console.log(convert('LEETCODEISHIRING', 3));
console.log(convert('LEETCODEISHIRING', 4));