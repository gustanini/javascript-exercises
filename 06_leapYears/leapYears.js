const leapYears = function(year) {
    if (year % 4 !== 0) return false;                       // not divisible by 4
    if (year % 100 == 0 && year % 400 !== 0) return false;  // divisible by 100 but not by 400
    return true;                                            // leap true
};

// Do not edit below this line
module.exports = leapYears;
