/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const lookup = {};
    for (let num of nums) {

        if (lookup[num] && lookup[num]) {
            return true;
        } else {
            lookup[num] = true;
        }

    }
    
    return false;

};