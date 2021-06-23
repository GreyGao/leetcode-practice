/**
 Given a binary tree, return the bottom-up level order traversal of its nodes' values. (ie, from left to right, level by level from leaf to root).

 For example:
 Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
  /  \
 15   7
 return its bottom-up level order traversal as:
 [
  [15,7],
  [9,20],
  [3]
 ]
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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  const result = []
  let index = 0;
  if(root){
    result.push([root.val])
  }

  const pushNode = (root, index) => {
    if(!root) return true;
    if(!root.left && !root.right) return true;
    let arr = result[index] ? result[index] : [];
    if(root.left){
      arr.push(root.left.val)
    }
    if(root.right){
      arr.push(root.right.val)
    }
    result.splice(index,1,arr)
    return pushNode(root.left, index + 1)&&pushNode(root.right, index + 1)
  }
  pushNode(root, index+1);
  return result.reverse()
};
