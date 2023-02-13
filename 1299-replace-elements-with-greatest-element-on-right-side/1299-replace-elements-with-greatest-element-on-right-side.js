/**
 * @param {number[]} arr
 * @return {number[]}
 */
const replaceElements = function (arr) {
  const result = [...arr];
  const output = [];

  for (let i = 0; i < arr.length; i++) {
    result.shift();
    const maxItemToTheRight = Math.max(...result);
    output.push(maxItemToTheRight);
  }

  output.pop();
  output.push(-1);

  return output;
};