/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let indx =0;
    while(indx<nums.length){
        let num = nums[indx];
        if(num !==indx+1){
            if(nums[num-1]===num){
                indx++;
            }
            else{
                let num2 = nums[num-1];
                nums[num-1] = num;
                nums[indx] = num2;
            }
        }
        else{
            indx++;
        }
    }
    let ans =[];
    for(let i =0; i<nums.length; i++){
        if(nums[i]!==i+1){
            ans.push(i+1);
        }
    }
    return ans;
};
