/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    var lst1 = headA;
    var lst2 = headB;
    var dictA = new Set();
    var dictB = new Set();
    dictA.add(lst1);
    dictB.add(lst2);
    while(lst1.next||lst2.next){
         if(dictB.has(lst1)){
            var intersect = lst1;
            return intersect;
        }
         if(dictA.has(lst2)){
            var intersect = lst2;
            return intersect; 
        }
        if(lst1.next){
            lst1 = lst1.next;
        }
        if(lst2.next){
            lst2 = lst2.next;
        }
        dictA.add(lst1);
        dictB.add(lst2);
    }
    if(dictB.has(lst1)){
            var intersect = lst1;
            return intersect;
    }
    if(dictA.has(lst2)){
        var intersect = lst2;
        return intersect; 
    }
};
