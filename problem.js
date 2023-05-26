
/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function insertNodeAtHead(head, data) {
    let  current =head;
    // head can be Null too
    if(current === null){
    return head = { data:data, next:null };
    }
    // If Head is not Nulll
   return head={data:data   , next:{...head}}
}

const res = insertNodeAtHead({data:320,next:{data:321,next:null}},324);
console.log(res);