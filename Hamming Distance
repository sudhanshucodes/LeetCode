/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    let Xor = ((x^y) >>> 0).toString(2);
    let oneBits=0;
    for(let i=0;i<Xor.length;i++){
        if(Xor[i]&1===1){
            oneBits++;
        }
    }
    return oneBits;
};
