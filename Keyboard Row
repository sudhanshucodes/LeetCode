/**
 * @param {string[]} words
 * @return {string[]}
 */
const row1 = new Set("qwertyuiop");
const row2 = new Set("asdfghjkl");
const row3 = new Set("zxcvbnm");
var findWords = function(words) {
    return words.filter((ele)=> oneRow(ele));
};

function oneRow(value){
    let letter = value[0].toLowerCase();
    let row;
    if(row1.has(letter)){
        row = row1;
    }
    else if(row2.has(letter)){
        row=row2;
    }
    else{
        row =row3;
    }
   // console.log(row,letter);
    for(let i =1; i<value.length; i++){
        if(!row.has(value[i].toLowerCase())){
         return false;
         }
      }
    return true;
}
