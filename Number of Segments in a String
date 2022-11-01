/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    s= s.trim();
    if(s.length===0){
        return 0;
    }
    let count =1; 
    for(let i =0; i<s.length; i++){
        if(s[i]===" "){
            if(s[i+1]!==" "){
                count++;
            }
        }
    }
    return count;
};
