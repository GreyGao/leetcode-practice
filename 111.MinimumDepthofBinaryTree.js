/**
 * Given a binary tree, find its minimum depth.

 The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

 Note: A leaf is a node with no children.

 Example:

 Given binary tree [3,9,20,null,null,15,7],

    3
   / \
  9  20
  /  \
 15   7
 return its minimum depth = 2.
 * */


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
  const checkRoot = (root) => {
    if(!root) return 0
    const left = checkRoot(root.left)
    const right = checkRoot(root.right)
    if(!root.left || !root.right) return Math.max(left, right) + 1;
    return Math.min(left, right) + 1;
  }

  return checkRoot(root)
};
