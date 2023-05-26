
/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function printLinkedList(head) {
let current = head;
while(current !== null) {
    console.log(current.data);
    current=current.next;
}

}
printLinkedList( {
     data:16,
     next:{
        data:13,
        next:null
     }
     })