/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    const PreSums = new Map();
    let sum =0; 
    PreSums.set(0,0);
    for(let i =1; i<nums.length;i++){
        sum+=nums[i-1];
        PreSums.set(i,sum);
    }
    let pivot =-1;
    let minPivot = pivot;
    for(let indx =0; indx<nums.length;indx++ ){
        let left = PreSums.get(indx);
        let right = PreSums.get(nums.length-1) - left -nums[indx] + nums[nums.length-1];
        if(left===right){
            pivot =indx;
            if(minPivot===-1){
                minPivot = pivot;
            }
            else{
                minPivot = Math.min(minPivot,pivot);
            }
        }
    }
    return minPivot;
};
