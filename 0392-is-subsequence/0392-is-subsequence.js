/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isSubsequence = function (s, t) {
  let pointOnS = 0;
  let pointOnT = 0;
  while (pointOnS !== s.length && pointOnT !== t.length) {
    if (s[pointOnS] === t[pointOnT]) {
      pointOnS++;
      pointOnT++;
    } else {
      pointOnT++;
    }
  }

  return pointOnS === s.length;
};