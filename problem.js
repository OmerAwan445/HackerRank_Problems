/*
    Find merge point of two linked lists
    Note that the head may be 'null' for the empty list.
    Node is defined as
    var Node = function(data) {
        this.data = data;
        this.next = null;
    }
*/

function findMergeNode(headA, headB) {
    let list1 = headA;
    let list2 = headB;

    while (list1.data !== list2.data) {
        // Traverse list A
        if (list1.next === null) {
            list1 = headB; // Move to head of list B
        } else {
            list1 = list1.next; // Move to the next node in list A
        }

        // Traverse list B
        if (list2.next === null) {
            list2 = headA; // Move to head of list A
        } else {
            list2 = list2.next; // Move to the next node in list B
        }
    }

    // At this point, list1 and list2 are pointing to the merge point
    return list1.data;
}

const res =findMergeNode({   data:1,
    next:{
        data:2,
        next:{
            data:3,
            next:null
        }
}},{   data:3,
    next:{
        data:5,
        next:null
}});
console.log(res);