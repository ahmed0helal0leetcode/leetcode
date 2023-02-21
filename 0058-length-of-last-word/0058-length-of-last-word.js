/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {

    const words = s.match(/[^\s,]+/g);

    return words[words.length - 1].length

};