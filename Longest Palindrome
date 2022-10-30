/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    const letters =new Set();
    let length = 0;
    for(let i =0; i<s.length; i++){
        let letter =s[i];
        if(letters.has(letter)){
            length +=2;
            letters.delete(letter);
        }
        else{
            letters.add(letter);
        }
    }
    if(letters.size!==0){
        return length+1;
    }
    return length;
};
