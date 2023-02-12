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
      const index = searchForClosing.lastIndexOf(bracket);
      if (index !== searchForClosing.length - 1) {
        return false;
      }
      searchForClosing.splice(index, 1);
    } else {
      searchForClosing.push(BRACKET_MAPPING[bracket]);
    }
  }

  return searchForClosing.length === 0;
};