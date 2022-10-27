/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const chars = new Map();
    for(let i=0; i<s.length; i++){
        let char = s[i];
        if(!chars.has(char)){
            chars.set(char,1);
        }
        else{
            chars.set(char,chars.get(char)+1);
        }
    }
    for(let i=0;i<s.length;i++){
        let count = chars.get(s[i]);
        if(count===1){
            return i;
        }
    }
    return -1;
};
