/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    var res = 0;

    for (var i = 0; i < 32; i++) {
        res = (n & 1) + (res * 2);
        n = n >> 1;
    }

    return res;
};

console.log(reverseBits(43261596));
console.log(reverseBits(4294967293));