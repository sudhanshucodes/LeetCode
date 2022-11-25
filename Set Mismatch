/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    let indx =0;
    while(indx < nums.length){
        let num = nums[indx];
        if(num !== indx+1 && nums[num-1] !== num){
            let num2 = nums[num-1];
            nums[num-1]=num;
            nums[indx]=num2;
        }
        else{
            indx++;
        }
    }
    for(let i = 0; i < nums.length; i++){
        if(nums[i] !== i + 1){
            return [nums[i],i + 1];
         }
    }
};
