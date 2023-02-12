/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function (nums) {
  let count = 0;
  const numberOfNums = nums.length;
  for (let i = 0; i < numberOfNums; i++) {
    if (nums.indexOf(0) !== -1) {
      const index = nums.indexOf(0);
      nums.splice(index, 1);
      count++;
    }
  }
  for (let i = 0; i < count; i++) {
    nums.push(0);
  }
  return nums;
};