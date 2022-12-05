/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
const sdnums = new Set();
var selfDividingNumbers = function(left, right) {
    let selfDivs =[];
    for(let indx = left; indx<=right; indx++){
        if(sdnums.has(indx)){
            selfDivs.push(indx);
        }
        else{
           let q = indx;
            let isSelfDiv = true;
            while(q>=10){
                let r = q%10;
                q = (q-r)/10;
                if(indx%r!==0){
                    isSelfDiv = false;
                }
            }
            if(indx%q!==0){
                isSelfDiv = false;
            }
            if(isSelfDiv){
                sdnums.add(indx);
                selfDivs.push(indx);
            } 
        }
    }
    return selfDivs;
};
