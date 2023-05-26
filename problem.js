// Insert a Node at the Head of a Linked List
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
// console.log(res);


// Insert a Node at the Tail of a Linked List
function insertNodeAtTail(head, data) {
    let  current =head;
    // head can be Null too
    if(current === null){
    return head = { data:data, next:null };
    }
    // If Head is not Nulll
  while(current.next !== null ){
    current = current.next;
  }
  current.next ={data:data, next:null};
  return head;
}

const res2 = insertNodeAtTail({data:320,next:null},324);
console.log(res2);