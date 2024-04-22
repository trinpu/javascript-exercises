const repeatString = function(string, num) {
    if (num < 0) {
        return 'ERROR';
    } else if (num === 0 || string === '') {
        return '';
    } else {
        return string.repeat(num);
    }

};

// Do not edit below this line
module.exports = repeatString;
