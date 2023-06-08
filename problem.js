/*
 * Complete the 'getNode' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_SINGLY_LINKED_LIST llist
 *  2. INTEGER positionFromTail
 */
    function getNode(llist, positionFromTail) {
        const data =[]
        while(llist){
        data.push(llist.data)
        llist= llist.next;
        }
        return data[data.length-1 -positionFromTail]
    }
    const res = getNode({   data:2,
    next:{
        data:3,
        next:{
            data:4,
            next:null
        }
}},2);
console.log(res);











        /* // base Case
        if(llist.next === null) return;
        data = getNode(llist.next ,--positionFromTail);
        // console.log(++count);
        if(positionFromTail === 0 ){
            console.log(positionFromTail, count);
            console.log(llist.data);
            return llist.data
        }
        else {
            ++count;
            return data
        } */