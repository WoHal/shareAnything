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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var sum = 0, carry = 0, h = p = new ListNode();
    
    while (l1 || l2) {
        sum = (l1 && l1.val || 0) + (l2 && l2.val || 0) + carry;
        
        p.next = new ListNode(sum % 10);
        
        p = p.next;
        
        carry = parseInt(sum / 10, 10);
        
        if (l1) {
            l1 = l1.next;
        }
        if (l2) {
            l2 = l2.next;
        }
    }
    
    if (carry > 0) {
        p.next = new ListNode(carry);
    }
    
    sum = carry = p = null;

    return h.next;
};