
/* function reversePrint(llist) {
    // Write your code here
    if (llist === null) return;
    else{
        reversePrint(llist.next);
        console.log(llist)
    }

} */


function makeReverseLlist(llist) {
  if (llist === null) {
    return null;
  }
let reversedLlist = null;
let currentNode = llist;
while(currentNode!==null){
   const newNode = {data:currentNode.data,next:reversedLlist}
   reversedLlist =newNode;
    currentNode = currentNode.next;
}

  return reversedLlist;
}

const llist = {
  data: 5,
  next: {
    data: 4,
    next: {
      data: 3,
      next: null
    }
  }
};

const reversedLlist = makeReverseLlist(llist);
console.log(reversedLlist);

// console.log(reversedLlist);