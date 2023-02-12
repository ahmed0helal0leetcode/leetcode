/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
  const BRACKET_MAPPING = Object.freeze({
    '(': ')',
    '{': '}',
    '[': ']',
  });
  const searchForClosing = [];
  for (const bracket of s) {
    if (searchForClosing.includes(bracket)) {
      const lastElement = searchForClosing.pop();
      if (lastElement !== bracket) {
        return false;
      }
    } else {
      searchForClosing.push(BRACKET_MAPPING[bracket]);
    }
  }

  return searchForClosing.length === 0;
};