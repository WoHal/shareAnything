/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    var res = '', i;

    for (i = n.length - 1; i >= 0; i--) {
        res += n[i];
    }

    return res;
};

console.log(reverseBits('00000010100101000001111010011100'));
console.log(reverseBits('11111111111111111111111111111101'));