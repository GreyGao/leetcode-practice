/**
 * Given a non-negative index k where k ≤ 33, return the kth index row of the Pascal's triangle.
 * Note that the row index starts from 0.
 *
 * In Pascal's triangle, each number is the sum of the two numbers directly above it.

 Example:

 Input: 3
 Output: [1,3,3,1]
 Follow up:

 Could you optimize your algorithm to use only O(k) extra space?
 * */

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  /**
   * 复杂度分析: 空间O(k)
   * Runtime: 52 ms, faster than 78.93% of JavaScript online submissions for Pascal's Triangle II.
   * Memory Usage: 34.5 MB, less than 40.00% of JavaScript online submissions for Pascal's Triangle II.
   * */

  if (rowIndex === 0) return [1];

  let result = [1, 1];
  if (rowIndex === 1) return result;

  let i = 2;
  while (i <= rowIndex) {
    result = generateNextRow(result);
    i++;
  }
  return result;
};
const generateNextRow = (row = []) => {
  const nextRow = [row[0]];
  row.forEach((item, i) => {
    const num = row[i + 1] ? row[i + 1] + item : item;
    nextRow.push(num);
  })
  return nextRow;
}

console.log(getRow(3));
