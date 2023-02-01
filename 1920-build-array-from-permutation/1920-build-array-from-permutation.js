/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {

    const output = [];
    const count = nums.length;
    let index = nums.length;

    for (let i = 0; i < count; i++) {
        nums[index + i] = nums[nums[i]];
    }

    for (let i = 0; i < count; i++) {
        nums.shift();
    }

    return nums;

};