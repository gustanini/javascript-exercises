const removeFromArray = function(inputArray, ...args) { // get arbitrary number of args
    let outputArray = [];                               // empty output array
    // function expression to iterate each element
    inputArray.forEach(element => {
        if (!args.includes(element)) {                  // check if element is not in args
            outputArray.push(element);
        }
    });
    return outputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
