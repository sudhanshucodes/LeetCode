/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let letterCount = new Map();
    for(let letter of magazine){
        if(letterCount.has(letter)){
            let currCount = letterCount.get(letter)+1;
            letterCount.set(letter,currCount);
        }
        else{
            letterCount.set(letter,1);
        }
    }
    for(let letter of ransomNote){
        if(letterCount.has(letter)){
            let currCount = letterCount.get(letter)-1;
            if(currCount<0){
                return false;
            }
            letterCount.set(letter,currCount);
        }
        else{
            return false;
        }
    }
    return true;
};
