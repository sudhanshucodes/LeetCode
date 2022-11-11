/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function(num) {
    let str ="";
    let isNegative = false;
    if(num<0){
        isNegative=true;
        num =-num;
    }
    while(num>=7){
        let r = num%7;
        str = r + str;
        num = (num-r)/7;
    }
    str = num+str;
    return isNegative? "-" +str: str;
    
};
