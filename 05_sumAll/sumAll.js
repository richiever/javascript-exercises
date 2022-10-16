const sumAll = function(int1, int2) {
    sum = 0;
    if (!Number.isInteger(int1) || !Number.isInteger(int2)) {
        return "ERROR";
    }
    else if (int1 < 0 || int2 < 0) {
        return "ERROR";
    }
    if (int1 > int2) {
        for (i = int1; i >= int2; --i) {
            sum += i;
        }
        return sum;
    }
    else {
        for (i = int1; i <= int2; ++i) {
            sum += i;
        }
        return sum;
    }

};

// Do not edit below this line
module.exports = sumAll;
