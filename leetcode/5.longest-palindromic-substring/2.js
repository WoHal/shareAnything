/** Manacher算法
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    var newStr = '#' + s.split('').join('#') + '#',
        len = newStr.length,
        maxPalindrome = '';

    for (var i = 1; i < len; i++) {
        var step = 1,
            curPalindrome = '';
        while (
            i - step >= 0 &&
            i + step < len &&
            newStr[i - step] === newStr[i + step]
        ) {
            ++step;
        }
        --step;
        curPalindrome = newStr.substring(i - step, i + step + 1);

        if (maxPalindrome.length < curPalindrome.length) {
            maxPalindrome = curPalindrome;
        }
    }
    return maxPalindrome.replace(/#/g, '');
};

console.log(longestPalindrome('babad'));
console.log(longestPalindrome('cbbd'));
console.log(longestPalindrome('abbbbabababa'));

var start = Date.now();
console.log(longestPalindrome('civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth'));
var end = Date.now();

console.log('ms: ', end - start);