const repeatString = function(inputString, times) {
    // validate times is more than 0
    if (times < 0) return "ERROR";
    // create empty output string
    let outputString = "";                                  
    // iterate 
    for (i = 0; i < times; i++) {
        outputString += inputString;                        // concatenate inStr to outStr
        //outputString = outputString.concat(inputString);    // concatenate inStr to outStr
    }
    return outputString;
};

// Do not edit below this line
module.exports = repeatString;
