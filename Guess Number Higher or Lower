/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    let left = 0;
    let right = n;
    while(left<=right){
        let middle = Math.floor(left + (right-left)/2);
        let isGuess = guess(middle);
        if(isGuess===0){
            return middle;
        }
        else if(isGuess===1){
            left = middle+1;
        }
        else if(isGuess===-1){
            right =middle-1;
        }
    }
};
