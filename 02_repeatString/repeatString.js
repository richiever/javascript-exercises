const repeatString = function(string, num) {
    if (num == 0) {
        return "";
    }
    if (num < 0) {
        return "ERROR";
    }
    let str=string;
    for (i =0; i < num-1; ++i) 
    {
        str = str + string;
    }
    return str;
};

// Do not edit below this line
module.exports = repeatString;
