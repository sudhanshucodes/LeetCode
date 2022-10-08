/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length!==t.length){
        return false;
    }
    let map = {};
    let i=0;
    while(i<s.length){
        if(s[i]===t[i]){
            i++;
        }
        else{
            if(!map[s[i]]){
             map[s[i]]=1;
            }
            else{
                map[s[i]] = map[s[i]]+1;
                if(map[s[i]]===0){
                    delete map[s[i]]; 
                }
            }
            if(!map[t[i]]){
                map[t[i]]=-1;
            }
            else{
                map[t[i]]= map[t[i]]-1;
                if(map[t[i]]===0){
                    delete map[t[i]]; 
                }
            }
            i++
        }
    }
    if(Object.keys(map).length===0){
        return true;
    }
    return false;
};
