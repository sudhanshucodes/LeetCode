/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let items = new Set();
    // intilise a set 
    
        // iterate over the nums array 
   for(let index =0; index<nums.length; index++){
        if(items.has(nums[index])){
            return true;            // if it's in return true
        }
        else{                       // else add it in set and continue
            items.add(nums[index]);
        }
    }
    return false;
};
