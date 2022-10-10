/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    if(num<10){
        return num;
    }
    let sum = 0; 
    while(num>=10){
        let r = num%10;
        sum = sum +r;
        num = (num-r)/10;
    }
    num = sum + num;
    return addDigits(num);
};
