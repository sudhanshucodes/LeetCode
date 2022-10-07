/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if(!head.next){
        return true;
    }
    let slowp = head;
    let fastp = head;
    let stack =[];
    while(fastp){
        fastp= fastp.next
        if(fastp){
            stack.push(slowp);
        }
        slowp = slowp.next;
        if(fastp){
            fastp= fastp.next;
        }
    }
    while(slowp){
        if(slowp.val !==stack.pop().val){
            return false;
        }
        slowp=slowp.next;
    }
    return stack.length!==0? false: true;
    
};
