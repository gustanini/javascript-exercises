const reverseString = function(inputString) {
    reversedString = "";                        // empty reversedString variable (not the same as reverseString function)
    inputStringLenght = inputString.length;     // get length

    for (i = 0; i < inputStringLenght; i++) {
        // iterate through each character in reverse, populating reversedString
        reversedString += inputString[inputStringLenght - 1 - i];
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
