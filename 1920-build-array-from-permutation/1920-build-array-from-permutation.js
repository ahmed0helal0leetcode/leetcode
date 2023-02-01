/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {

    const output = [];

    for (let i = 0; i < nums.length; i++) {
        output.push(nums[nums[i]]);
    }

    return output;

};