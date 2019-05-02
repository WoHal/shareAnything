/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var len = nums.length;
    
    for (var i = 0; i < len; i++) {
        var other = target - nums[i],
            otherIndex = nums.indexOf(other);
        
        if (otherIndex > -1 && i !== otherIndex) {
            return [i, otherIndex];
        }
    }
};

var nums = [2, 7, 11, 15], target = 9;

console.log(twoSum(nums, target));