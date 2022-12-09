/**
 * @param {string[]} words
 * @return {number}
 */
const MorseCode = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
var uniqueMorseRepresentations = function(words) {
    let map = new Set();
    let count =0;
    for(let word of words){
        let trans = "";
        for(let index in word){
            let code = word.charCodeAt(index)-97;
            trans += MorseCode[code];
        }
        if(!map.has(trans)){
            count++;
            map.add(trans);
        }
    }
    return count;
};
