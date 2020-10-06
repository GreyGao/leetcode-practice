/**
 * Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.
 * In Pascal's triangle, each number is the sum of the two numbers directly above it.
 Example:

 Input: 5
 Output:
 [
 [1],
 [1,1],
 [1,2,1],
 [1,3,3,1],
 [1,4,6,4,1]
 ]

 * */

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  /**
   * 复杂度分析: 时间O(n^2)
   * Your runtime beats 97.00 % of javascript submissions.
   * */

  if (numRows === 0) return [];

  const result = [[1]];
  if (numRows === 1) return result;

  let i = 1;
  let prev = result[0];
  while (i < numRows) {
    const nextRow = generateNextRow(prev);
    result.push(nextRow);
    prev = nextRow;
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

console.log(generate(5));
