/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    if(word.length===1){
        return true;
    }
    let IsCapitalFL = word[0].toUpperCase()===word[0]? true:false;
    let IsCapitalSL =  word[1].toUpperCase()===word[1]? true:false
    if(!IsCapitalFL && IsCapitalSL){
        return false;
    }
    for(let i=2; i<word.length; i++){
        let IsCapital = word[i].toUpperCase()===word[i]? true:false;
        if(IsCapitalSL && !IsCapital){
            return false
        }
        else if(!IsCapitalSL && IsCapital){
            return false;
        }
    }
    return true;
};
