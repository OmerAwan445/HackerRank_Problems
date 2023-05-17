



function dynamicArray(n, queriesArr) {
    // Write your code here
    const arr=[];
    let lastAnswer=0;
    let count=0;
const answerArr=[];
for (let i = 0; i < queriesArr.length; i++) {
    const queryType= queriesArr[i][0];
     const x= queriesArr[i][1];
     const y= queriesArr[i][2];
     let idx= ((x ^ lastAnswer) % n);
    if(queryType === 1){
    // creates a new array on that index if there is no array formed in that index bcz we need a 2d array
    if(arr[idx] === undefined) arr[idx]=[];
        arr[idx].push(y);
    }
    else if(queryType === 2){
    if(answerArr[count] === undefined) answerArr[count]=[];
    lastAnswer = arr[idx][y % arr[idx].length];
    answerArr[count].push(lastAnswer);
    count++;
}
}
 return answerArr;
}

const res =dynamicArray(2,[[1,0,5], [1,1,7], [1, 0, 3],[2, 1, 0] ,[2, 1, 1]])
console.log(res);