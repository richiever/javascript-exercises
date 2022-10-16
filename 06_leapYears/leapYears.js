const leapYears = function(year) {
    // if div by 4 and div by 400, it has to be a leap year
    if(year % 4 == 0 && year % 400 == 0) {
        return true;
    }
    if (year % 4 == 0 && year % 100 != 0) {
        return true;
    }
    if (year % 4 == 0 && year % 100 == 0 && year % 400 != 0) {
        return false;
    }
    else{
        return false;s
    }

};

// Do not edit below this line
module.exports = leapYears;
