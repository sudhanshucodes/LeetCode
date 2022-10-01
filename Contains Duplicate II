/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    // intilise a hash table
    let dict = {};
    // check if they are duplicates in the first window
    let len = k;
    if(k>nums.length){
         len = nums.length;
    }
    for(let index =0; index<=len;index++){
        // iterate over the first window 
        let currEle= nums[index];
        if(dict[currEle]<=k){
                return true;                    
        }
        dict[currEle]=index;
    }
         // else shift the window and repeat 
    for(let indx = len+1;indx<nums.length;indx++){
        // check for the last element whether if exits in hash table or not
        let lstEle = nums[indx];
        if(dict[lstEle]>=(indx-k)){
         return true;        // if true returns true
        }
        dict[lstEle]=indx;
    }
    return false;
    // return false if no duplicates are found is found
};
