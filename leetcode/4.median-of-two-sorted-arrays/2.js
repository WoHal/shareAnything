/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var len1 = nums1.length,
        len2 = nums2.length,
        totalLen = len1 + len2,
        isEven = totalLen % 2 === 0;
        midIndex = parseInt(totalLen / 2, 10),
        curIndex = 0,
        res = [];

    var i = j = 0;

    while (nums1[i] || nums2[j]) {
        var resIndex = isEven ? curIndex % 2 : 0;
        if (nums1[i] !== undefined && nums2[j] !== undefined) {
            if (nums1[i] <= nums2[j]) {
                res[resIndex] = nums1[i];
                ++i;
            } else if (nums1[i] > nums2[j]) {
                res[resIndex] = nums2[j];
                ++j;
            }
        } else if (nums1[i]) {
            res[resIndex] = nums1[i]; 
            ++i;
        } else if (nums2[j]) {
            res[resIndex] = nums2[j];
            ++j;
        }
        if (curIndex === midIndex) {
            break;
        }
        ++curIndex;
    }

    return isEven ? (res[0] + res[1]) / 2 : res[0];
};

console.log(findMedianSortedArrays([1, 2], [3, 4, 4]));
console.log(findMedianSortedArrays([1, 2], [3, 4]));
console.log(findMedianSortedArrays([1, 3], [2])); 
console.log(findMedianSortedArrays(
    [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22],
    [0,6]
));