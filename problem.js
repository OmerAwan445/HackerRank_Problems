// Complete the CompareLists function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */

function CompareLists(llist1, llist2) {
   let firstList= llist1;
   let secondList= llist2;
    while(firstList !==null || secondList!==null ){
    if(firstList=== null || secondList === null) return 0
    if(firstList.data !== secondList.data) return 0
    firstList= firstList.next;
    secondList =secondList.next;
}
return 1;
}

const res= CompareLists(
    {   date:2,
        next:{
            data:3,
            next:null
}},
{   date:2,
    next:{
        data:3,
        next:{
            data:3,
            next:null
        }
}}
)
console.log(res);