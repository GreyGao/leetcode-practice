/**
 Given a singly linked list, determine if it is a palindrome.

 Example 1:

 Input: 1->2
 Output: false
 Example 2:

 Input: 1->2->2->1
 Output: true
 * */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  if(!head || !head.next) return true;
  const list = [];
  let curr = head;
  while (curr) {
    list.push(curr.val);
    curr = curr.next;
  }
  const reverse = list.concat().reverse();
  for(let i = 0; i<list.length; i++){
    if(reverse[i] !== list[i]) return false;
  }
  return true;
};
