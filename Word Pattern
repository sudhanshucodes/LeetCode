/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let map ={};
    let set= new Set();
    const words = s.split(" ");
    if(pattern.length!==words.length){
        return false;
    }
    for(let indx=0; indx<words.length; indx++){
        if(!map[pattern[indx]]){
            if(!set.has(words[indx])){
                map[pattern[indx]]= words[indx];
                set.add(words[indx]);
            } 
            else{
                return false;
            }
        }
        else{
            if(map[pattern[indx]]!==words[indx]){
                return false;
            }
        }
    }
    return true;
};
