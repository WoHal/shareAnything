/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var len = s.length, i = 0, j = 1, max = 1;

    do {
        var cur = s.slice(i, j).split(''),
            curLen = cur.length,
            tmp = new Set(cur);
        if (curLen === tmp.size) {
            max = curLen;
        } else {
            ++i;
        }
        ++j;
    } while(j <= len)

    return max;
};

console.log(lengthOfLongestSubstring('bbbbb'));
console.log(lengthOfLongestSubstring('abcabcbb'));
console.log(lengthOfLongestSubstring('pwwkew'));