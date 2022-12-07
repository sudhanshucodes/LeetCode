/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    let shift =0;
    while(shift<s.length){
        if(s!==goal){
            shift++;
            let currS = s.substring(shift)+s.substring(0,shift);
            if(currS===goal){
                return true;
            }
        }
        else{
           return true;
        }
    }
    return false;
};
