/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {


    count = nums.length;


    for (let i = 0; i < count; i++) {

        nums[count + i] = nums[i];
    }

    return nums;
};