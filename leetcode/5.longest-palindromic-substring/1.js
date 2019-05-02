/** 暴力方法
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    for (var len = s.length, i = len - 1; i >= 0; i--) {
        var j = 0;
        while (i + j < len) {
            var palindrom = s.slice(j, i + j);

            for (var ii = 0, len = palindrom.length; ii < len / 2 + 1; ii++) {
                if (palindrom[ii] === palindrom[len - ii]) {

                }
            }
            if (palindrom === palindrom.split('').reverse().join('')) {
                return palindrom;
            }
            ++j;
        }
    }
};

console.log(longestPalindrome('babad'));
console.log(longestPalindrome('cbbd'));
console.log(longestPalindrome('abbbbabababa'));

var start = Date.now();
console.log(longestPalindrome('civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth'));
var end = Date.now();

console.log('ms: ', end - start);