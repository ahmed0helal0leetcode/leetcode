/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
  let maxProfitValue = 0;
  let profit = 0;
  let left = 0;
  let right = 1;
  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      profit = prices[right] - prices[left];
      maxProfitValue = Math.max(profit, maxProfitValue);
    } else {
      left = right;
    }
    right++;
  }
  return maxProfitValue;
};

