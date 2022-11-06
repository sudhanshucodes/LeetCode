/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function(s, k) {
    let grouplen = 0;
    let reformStr ="";
    for(let indx=s.length-1;indx>-1;indx--){
        let char = s[indx];
        if(char!=='-'){
            if(grouplen<k){
                if(indx===0 && grouplen+1>k){
                    reformStr=char.toUpperCase() +"-"+ reformStr; 
                }
                else{
                    reformStr=char.toUpperCase() + reformStr;
                }
               grouplen++;
            }
            else{
                reformStr=char.toUpperCase() +"-"+ reformStr;
                grouplen=1;
            }
        }
    }
    return reformStr;
};
