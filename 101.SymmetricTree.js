/**
 Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

 For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

     1
    / \
   2   2
  / \ / \
 3  4 4  3


 But the following [1,2,2,null,3,null,3] is not:

    1
   / \
  2   2
   \   \
    3    3


 Note:
 Bonus points if you could solve it both recursively and iteratively.
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
 * @return {boolean}
 */
var isSymmetric = function(root) {
  return symmetricNode(root,root)
}

function symmetricNode(left,right){
  // base line
  if(!left && !right) return true;
  if(!left || !right) return false;
  // recursively line
  return left.val === right.val && symmetricNode(left.left,right.right) && symmetricNode(left.right,right.left);
};
