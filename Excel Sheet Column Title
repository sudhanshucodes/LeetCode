/**
 * @param {number} columnNumber
 * @return {string}
 */
var alphabets=['Z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var convertToTitle = function(columnNumber) {
        if(alphabets[columnNumber]){
            return alphabets[columnNumber];
        }
    else{
    var title = "";
    var remainder = columnNumber%26 ;
    columnNumber = Math.floor(columnNumber/26);
        if(remainder===0){
            columnNumber --;
        }
    var letter = convertToTitle(columnNumber)+convertToTitle(remainder) ;
    title = letter + title;
    return title;
    }    
};
