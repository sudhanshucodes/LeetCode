/**
 * @param {number} x
 * @return {boolean}
 */


var isPalindrome = function(x) {
    
    if (x<0) {
        return false;
    }
    
    dividend = x;
    a = 0;
    for(var i=0; dividend>=10; i++){
        // Divisor : 10 always
        quotient = ~~(dividend/10);
        remainder = dividend%10;
        dividend = quotient;
        a = (a + remainder)*10
        
        
    }
    a = a + dividend; 
    
    if (a == x) {
        return true;
    }
    else {
        return false;
    }
};