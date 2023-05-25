// interface node{
// data:any,
// next:Node
// }


class ListNode{
    data:any
    next:ListNode | null
    constructor(data:any){
    this.data = data;
    this.next=null;
    }
}

class LinkedList{
    head:ListNode | null
    constructor(){
        this.head=null;
    }
    // Add Data to node and make a Linked List using head.
    add(data:any){
    const newNode = new ListNode(data);
    if(this.head === null){
        this.head= newNode;
        return
    }
    let current:ListNode | null=this.head;
    while(current?.next !== null){
        console.log(current);
        current= current.next;
    }
    current.next={...newNode};
}
}

const list1= new LinkedList();
list1.add(1);
list1.add(2);
list1.add("omer");
console.log(list1);