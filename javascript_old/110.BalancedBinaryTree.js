/**
 Given a binary tree, determine if it is height-balanced.

 For this problem, a height-balanced binary tree is defined as:

 a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

 Example 1:

 Given the following tree [3,9,20,null,null,15,7]:

    3
   / \
  9  20
  /  \
 15   7
 Return true.

 Example 2:

 Given the following tree [1,2,2,3,3,null,null,4,4]:

       1
      / \
     2   2
    / \
   3   3
  / \
 4   4
 Return false.
 * */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
  let result = true;

  const checkRoot = (root) => {
    if(!result) return null;
    if(!root) return 0

    const left = checkRoot(root.left);
    const right = checkRoot(root.right);
    // console.log(left,right)

    if(Math.abs(left - right) > 1) {
      result = false;
    };

    return Math.max(left,right) + 1
  }

  checkRoot(root)

  return result
};
