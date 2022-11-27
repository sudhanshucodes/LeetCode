/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    let len =1;
    let maxLen = len;
    for(let i=0;i<nums.length;i++){
        if(nums[i]<nums[i+1]){
            len++;
        }
        else{
            maxLen = Math.max(maxLen,len);
            len=1;
        }
    }
    return maxLen;
};
