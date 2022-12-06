/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    let minCost = [];
    minCost[cost.length-1]=cost[cost.length-1];
    minCost[cost.length-2]=cost[cost.length-2];
    for(let i = cost.length-3;i>=0;i--){
        minCost[i]=cost[i]+Math.min(minCost[i+1], minCost[i+2]);
    }
    return Math.min(minCost[0],minCost[1]);
};
