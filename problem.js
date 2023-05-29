function deleteNode(llist, position) {
    // Write your code here
    let current = llist;
    let counter =0;
    // Previous is null att start becasue at start no previous node
    let previous=current;
    // If Starting node
    if(position === 0 && current.next !== null) return llist = {...current.next};
    while(position !== counter){
        previous = current
        current=current.next;
        counter++;
    }

    if(current.next === null ){
        // If one node
        if(previous.next === null)
        {
            return llist = null;
        }
        // If Last node
        previous.next =null;
        return llist;
    }
    // If any other node
    previous.next = {...current.next};
    return llist;
    }
const res =deleteNode({data:1,next:null},0)
console.log(res);

