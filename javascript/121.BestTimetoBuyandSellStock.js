/**
 *
 Say you have an array for which the ith element is the price of a given stock on day i.

 If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

 Note that you cannot sell a stock before you buy one.

 Example 1:

 Input: [7,1,5,3,6,4]
 Output: 5
 Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
 Not 7-1 = 6, as selling price needs to be larger than buying price.
 Example 2:

 Input: [7,6,4,3,1]
 Output: 0
 Explanation: In this case, no transaction is done, i.e. max profit = 0.
 * */


/**
 * @param {number[]} prices
 * @return {number}
 */
// var maxProfit = function(prices) {
//   let result = 0, i=0, curr = prices.shift();
//   while (curr || curr ===0) {
//     for (const sell of prices) {
//       if(sell > curr){
//         const profit = sell - curr;
//         result = Math.max(result, profit)
//       }
//     }
//     curr = prices.shift();
//   }
//
//   return result;
// };

const maxProfit = (prices) => {
  if(prices.length ===0) return 0;
  let result = 0, min = prices[0];

  for (const curr of prices){
    if(curr > min) {
      result = Math.max(result, curr - min);
    }else{
      min = Math.min(min, curr);
    }
  }
  return result;
}


console.log(maxProfit([7,1,5,3,6,4])); // 5
console.log(maxProfit([2,1,2,1,0,1,2])); // 2
