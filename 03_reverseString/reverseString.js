const reverseString = function(string) {
    let str = "";
    for(i = 1; i < string.length+1; ++i) {
        str = str + string[string.length - i];
    }
    return str;
};

// Do not edit below this line
module.exports = reverseString;
