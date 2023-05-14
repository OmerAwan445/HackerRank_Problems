// =============
function hourglassSum(arr) {
    let currSum = 0;
    let maxSum;
    //loop running rows
    for (let i = 0; i < arr.length - 2; i++) {
    //loop running columns
        for (let j = 0; j < arr[i].length - 2; j++) {
            currSum=arr[i][j]+arr[i][j+1]+arr[i][j+2];
            currSum+=arr[i+1][j+1];
            currSum+=arr[i+2][j]+arr[i+2][j+1]+arr[i+2][j+2];
            if(i==0 && j==0) maxSum = currSum;
        if(maxSum < currSum) maxSum = currSum;
        currSum = 0;
    }
}
    return maxSum;
}

const twoDArr = [[-1, -1, 0, -9, -2, -2], [-2, -1, -6, -8, -2, -5], [-1, -1, -1, -2, -3, -4], [-1, -9, -2 ,-4 ,-4 ,-5], [-7, -3, -3 ,-2, -9, -9], [-1, -3, -1, -2, -4 ,-5]];
const res = hourglassSum(twoDArr);
console.log(res)