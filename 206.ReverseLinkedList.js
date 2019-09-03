/*
 Reverse a singly linked list.

 Example:

 Input: 1->2->3->4->5->NULL
 Output: 5->4->3->2->1->NULL
 Follow up:

 A linked list can be reversed either iteratively or recursively. Could you implement both?
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
var reverseList = function(head) {
  if(!head) return null;

  const list = [];
  while (head) {
    list.push(head.val);
    head = head.next;
  }

  const curr = list.pop();
  let newList = new ListNode(curr);
  let h = newList;

  while (list.length>0) {
    let c = list.pop();
    const next = new ListNode(c);
    h.next = next;
    h = h.next;
  }

  return newList;
};
