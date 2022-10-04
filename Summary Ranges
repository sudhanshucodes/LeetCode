/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    let ranges =[];    
    let len=nums.length;
    if(len>0){
        let min = nums[0];
        let max =min;
        for(let indx=1;indx<=len;indx++){
            let curr = nums[indx];
            if(curr===(max+1)){             
                // update max if currele is 1 more than the max
                max++;
            }
            else{
                if(min===max){
                    ranges.push(""+min);
                }
                else{                 
                    // else push "min->max" in ranges
                    ranges.push(min+"->"+max);
                }
                min = curr;
                max=min;
            }
        }
    }
    return ranges;
};
