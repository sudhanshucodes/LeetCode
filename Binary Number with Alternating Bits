/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function(n) {
    let prevbit = n&1;
    while(n!==0){
        n = n>>1;
        let currbit = n&1;
        if(currbit === prevbit){
            return false;
        }
        prevbit = currbit;
    }
    return true;
};
