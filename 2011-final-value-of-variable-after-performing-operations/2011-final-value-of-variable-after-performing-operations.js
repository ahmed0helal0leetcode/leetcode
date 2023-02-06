/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    X = 0;
    
    for (operation of operations) {
        eval(operation);
    }

    return X;
};