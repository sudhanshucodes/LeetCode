/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    // n <=0 return false
    if(n<=0){
        return false;
    }
    // if n==1 return true
    if(n===1){
        return true;
    }
    while(isZero(n&1)){
        n = n>>>1;
    }
    n=n>>>1;
    if(n===0){
        return true;
    }
    // n === 0 return true else false 
    return false;
};

function isZero(n){
    if(n===0){
        return true;
    }
    return false;
}
