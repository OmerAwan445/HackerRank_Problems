
/*
 * Complete the 'removeDuplicates' function below.
 *
 * The function is expected to return an INTEGER_SINGLY_LINKED_LIST.
 * The function accepts INTEGER_SINGLY_LINKED_LIST llist as parameter.
 */

/*
* For your reference:
*
* SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */

/* function removeDuplicates(llist) {
    let uniqueDataList = null;
    let currentUniqueDataList = uniqueDataList;

    while (llist !== null) {
        const newNode = {
            data: llist.data,
            next: null
        };

        if (currentUniqueDataList === null) {
            currentUniqueDataList = {...newNode};
            uniqueDataList = currentUniqueDataList;
            console.log(currentUniqueDataList);
        } else if (currentUniqueDataList.data !== newNode.data) {
            currentUniqueDataList.next = newNode;
            currentUniqueDataList = currentUniqueDataList.next;
        }

        llist = llist.next;
    }

    return uniqueDataList;
}
 */
function removeDuplicates(llist) {
    // Write your code here
    let uniqueDataList = null;
    let currentUniqueDataList = null;
    while(llist !== null){
        const newNode = {
            data: llist.data,
            next: null
        }
        if(currentUniqueDataList === null){
            currentUniqueDataList = {...newNode};
            uniqueDataList =currentUniqueDataList
        }
        else if(currentUniqueDataList.data !== llist.data)
        {

            currentUniqueDataList.next = newNode;
            currentUniqueDataList= currentUniqueDataList.next;
        }
        llist = llist.next;

    }

return uniqueDataList
 }

const res = removeDuplicates({   data:0,
    next:{
        data:6,
        next:{
            data:7,
            next:{
                data:9,
                next:{
                    data:9,
                    next:null
                }
            }
        }
}});
console.log(res);
