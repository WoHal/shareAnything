/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var sign = x >= 0 ? 1 : -1,
        res;
    
    x = sign * x;

    res = (x + '').split('').reverse().join('') * sign;

    if (res < -Math.pow(2, 31) || res > Math.pow(2, 31) - 1) {
        return 0;
    }

    return res;
};

console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(120));