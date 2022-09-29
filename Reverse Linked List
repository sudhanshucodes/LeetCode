/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if(!head){
        return head;
    }
    let rList = new ListNode(head.val);
    while(head.next){
        head= head.next;
        let node = new ListNode(head.val);
        node.next = rList;
        rList = node;
    }
    return rList;
};
