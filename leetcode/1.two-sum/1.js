/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var len = nums.length;
    
    for (var i = 0; i < len; i++) {
        for (var j = i + 1; j < len; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
};

var nums = [2, 7, 11, 15], target = 9;

console.log(twoSum(nums, target));