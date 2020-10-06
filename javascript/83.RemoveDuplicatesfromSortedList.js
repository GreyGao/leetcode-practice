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
  let curr = head;
  while(curr !== null && curr.next !== null){
    //  如果值相同，就跳过对应节点
    if(curr.val === curr.next.val){
      curr.next = curr.next.next
    }else{
      // 继续保持节点连接
      curr = curr.next
    }
  }


  return head;
};

console.log(deleteDuplicates([1,2,2,3,4,4])); // [1,2,3,4]