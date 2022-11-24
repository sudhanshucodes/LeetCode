/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let average =0;
    for(let i=0; i<k;i++){
        average = ((average*(i)+ nums[i])/(i+1));
    }
    let maxAv = average;
    for(let i=k; i<nums.length; i++){
        average = ((average*(k)- nums[i-k] + nums[i])/(k));
        maxAv = Math.max(average,maxAv);
    }
    return maxAv;
};
