/**
 * Write a program to find the node at which the intersection of two singly linked lists begins.
 * Notes:
 If the two linked lists have no intersection at all, return null.
 The linked lists must retain their original structure after the function returns.
 You may assume there are no cycles anywhere in the entire linked structure.
 Your code should preferably run in O(n) time and use only O(1) memory.
 * */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  /**
   * 思路：
   * 去除A、B链表中较长链表多余的部分
   * 比对剩余部分两者相同的交点的节点
   * Runtime: 72 ms, faster than 99.11% of JavaScript online submissions for Intersection of Two Linked Lists.
   * Memory Usage: 44.6 MB, less than 9.09% of JavaScript online submissions for Intersection of Two Linked Lists.
   * */
  if (!headA || !headB) return null;
  const lenA = countLen(headA);
  const lenB = countLen(headB);
  let curr = headA;
  let shorter = headB;
  if(lenA < lenB) {
    curr = removeTopElement(headB, lenB - lenA);
    shorter = headA;
  };
  if(lenA > lenB) {
    curr = removeTopElement(headA, lenA - lenB);
    shorter = headB;
  };

  while (curr) {
    // console.log('curr', curr)
    // console.log('shorter', shorter)
    if(curr === shorter) return curr;
    if(curr.next === shorter.next) return curr.next;
    curr = curr.next;
    shorter = shorter.next;
  }
  return null;
};

const countLen = (head) => {
  let len = 0;
  while (head) {
    len++;
    head = head.next;
  }
  return len;
};

const removeTopElement = (head, n) => {
  let curr = head;
  let i = 0;
  while(i < n) {
    curr = curr.next;
    i++;
  }
  return curr;
}
