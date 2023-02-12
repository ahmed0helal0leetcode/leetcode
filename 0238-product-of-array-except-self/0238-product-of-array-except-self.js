/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = function (nums) {
  const sumOfPres = {};
  for (let i = 0; i < nums.length; i++) {
    sumOfPres[i] = i === 0 ? 1 : sumOfPres[i - 1] * nums[i - 1];
  }
  const sumOfPosts = {};
  for (let i = nums.length - 1; i > -1; i--) {
    sumOfPosts[i] = i === nums.length - 1 ? 1 : sumOfPosts[i + 1] * nums[i + 1];
  }

  const result = [];
  for (let i = 0; i < nums.length; i++) {
    result.push(sumOfPres[i] * sumOfPosts[i]);
  }

  return result;
};