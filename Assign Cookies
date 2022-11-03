/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    g.sort((a, b) => {
       return a-b; 
    });
    s.sort((a, b) => {
       return a-b; 
    });
    let maxCount = 0;
    let i =0;
    let j = i;
    while(i<s.length && j<g.length){
        if(s[i]>=g[j]){
            maxCount++;
            j++
        }
            i++;
    }
    return maxCount;
};
