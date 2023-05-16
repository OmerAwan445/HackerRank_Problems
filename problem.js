// function processData(input) {
//     //Enter your code here
//     var input = input.split("\n");
//     var firstLine = input[0].split(" ");
//     var rotator = firstLine[1];
//     var arr = input[1].split(" ");

//     var simplifiedRotator = rotator % arr.length;

//     console.log(arr.slice(simplifiedRotator, arr.length).concat(arr.slice(0, simplifiedRotator)).join(" "))
// }

// process.stdin.resume();
// process.stdin.setEncoding("ascii");
// _input = "";
// process.stdin.on("data", function (input) {
//     _input += input;
// });

// process.stdin.on("end", function () {
//    processData(_input);
// });



















//============== Left Rotation ==================
function rotateLeft(d, arr) {
    let rotatedArr = [...arr];
    const toPushArr = rotatedArr.splice(0,(d%arr.length));
    rotatedArr=[...rotatedArr,...toPushArr];
    return rotatedArr;
}

const res = rotateLeft(5,[1,2,3]);
console.log(res);





















//============== Left Rotation ==================
/* function rotateLeft(d, arr) {
    let rotatedArr = [...arr];
    const toPushArr = rotatedArr.splice(0,d);
    rotatedArr=[...rotatedArr,...toPushArr];
    return rotatedArr;
}

const res = rotateLeft(2,[1,2,3,4,5,2,4,5]);
console.log(res); */
