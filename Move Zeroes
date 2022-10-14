/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let pointer1 = 0;
    while(pointer1<(nums.length-1)){
        let pointer2 = pointer1+1;
        if(nums[pointer1]===0){
            while(nums[pointer2]===0 && pointer2<nums.length-1){
                pointer2++;
            }
            nums[pointer1]=nums[pointer2];
            nums[pointer2]=0;
            
        }
            pointer1++;
    }
    return nums;
};
