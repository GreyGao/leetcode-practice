/**
 Given a sorted linked list, delete all duplicates such that each element appear only once.

 Example 1:
 Input: 1->1->2
 Output: 1->2

 Example 2:
 Input: 1->1->2->3->3
 Output: 1->2->3
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  let listNode = new ListNode();
  let curr = listNode;
  const stack = [];

  while (head !== null){
    if(stack.indexOf(head) === -1){
      stack.push(head);
      curr.next = head;
      curr = curr.next;

      head = head.next;
    }
  }

  return listNode.next;
};