/**
 * @param {number} x
 * @return {boolean}
 */

function arrayEquals(a, b) {
    return Array.isArray(a) &&
        Array.isArray(b) &&
        a.length === b.length &&
        a.every((val, index) => val === b[index]);
}


var isPalindrome = function(x) {
    var reverse_array = [];
    var normal_array = [];
    
    if (x<0) {
        return false;
    }
    
    dividend = x;
    for(var i=0; dividend>=10; i++){
        // Divisor : 10 always
        quotient = ~~(dividend/10);
        remainder = dividend%10;
        dividend = quotient;
        reverse_array.push(remainder);
        normal_array.push(remainder);
    }
    reverse_array.push(dividend);
    normal_array.push(dividend);
    
    normal_array.reverse();
    if (arrayEquals(reverse_array, normal_array)) {
        return true;
    }
    else {
        return false;
    }
};