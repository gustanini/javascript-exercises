const sumAll = function(numberOne, numberTwo) {
    // validate numbers are positive ints
    if (!Number.isInteger(numberOne) || !Number.isInteger(numberTwo)) return 'ERROR';
    if (numberOne < 0 || numberTwo < 0) return 'ERROR';
    
    // calculate sum of all digits
    let sum = number => {
        let result = 0;
        for (i = 0; i = number; i++){
            result += i;
        }
    }
    
    return sum(numberOne) + sum(numberTwo);
};

// Do not edit below this line
module.exports = sumAll;
