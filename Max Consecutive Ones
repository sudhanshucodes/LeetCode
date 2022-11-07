/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let count =0;
    let maxCont=count;
    for(let i=0; i<nums.length; i++){
        if(nums[i]===1){
            count++;
            maxCont=Math.max(count,maxCont);
        }
        else{
            count=0;
        }
    }
    return maxCont;
};
