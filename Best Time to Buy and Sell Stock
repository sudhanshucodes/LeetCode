/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var maxP =0;
    // prices has only 1 item return 0
    if(prices.length===1){
        return maxP;
    }
    // else iterate to find the minimum price 
    var buyPrice = prices[0];
    var sellPrice=buyPrice;
    for(indx=1;indx<prices.length;indx++){
        var currPrice = prices[indx];
           if(currPrice<buyPrice && indx<prices.length-1){
            buyPrice=currPrice;
            sellPrice=buyPrice;
        }
        if(currPrice>sellPrice){
            sellPrice=currPrice;
            var currP = sellPrice-buyPrice;
            if(currP>maxP){
                maxP = currP;
            }
        } 
    }
       var currP = sellPrice-buyPrice;
         if(currP>maxP){
                maxP = currP;
            }
        return maxP;    
};
