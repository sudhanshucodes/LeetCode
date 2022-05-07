/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    x_str = x.toString();
    x_reverse_str = x_str.split("").reverse().join("");
    if (x_str == x_reverse_str) {
        return true;
        }
    else {
        return false;
        }
};