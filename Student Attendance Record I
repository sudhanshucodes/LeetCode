/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    let countA=0;
    for(let i=0; i<s.length; i++){
        if(s[i]==="A"){
            countA++;
            if(countA>=2){
                return false;
            }
        }
        else if(s[i]==="L"){
            if(s[i+1]==="L"&s[i+2]==="L"){
                return false;
            }
        }
    }
    return true;
};
