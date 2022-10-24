/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    let left =0;
    let right = num;
    while(left<=right){
        let middle = Math.floor(left + (right-left)/2);
        let square =Math.pow(middle,2);
        //console.log(square,middle,left,right);
        if(square===num){
            return true;
        }
        else if(square<num){
            left =middle + 1; 
        }
        else{
            right =middle - 1;
        }
    }
    return false;
};
