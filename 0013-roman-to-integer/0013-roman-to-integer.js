/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const lookup = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000,
        "CM": 900,
        "XC": 90,
        "IV": 4,
        "IX": 9,
        "XL": 40,
        "CD": 400,
    };

    const keys = Object.keys(lookup);
    let sum = 0;
    for (let i = 0; i <= s.length-1; i++) {
        const pattern = s[i] + s[i + 1];
        let indexByTwoLetters = keys.indexOf(pattern)
        if (indexByTwoLetters!==-1) {
            sum += lookup[pattern];
            i++;
        } else {
            sum += lookup[s[i]];
        }
    }

    return sum;
};