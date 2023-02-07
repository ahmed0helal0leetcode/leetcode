/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {

    hashMapValueAndHowMuchItRepated = {};
    for (let i = 0; i < nums.length; i++) {
        hashMapValueAndHowMuchItRepated[nums[i]] ? hashMapValueAndHowMuchItRepated[nums[i]]++ : hashMapValueAndHowMuchItRepated[nums[i]] = 1;

    }

    let keys = Object.keys(hashMapValueAndHowMuchItRepated);

    keys.sort((a, b) => {
        return hashMapValueAndHowMuchItRepated[a] - hashMapValueAndHowMuchItRepated[b]
    });

    keys.reverse();
    const result = [];
    for (let i = 0; i < k; i++) {
        result.push(keys[i]);
    }
    return result;

};