/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    X = 0;
    operations.reduce(
        (accumulator, currentValue) => accumulator + eval(currentValue),
        X
    )
    return X;

};